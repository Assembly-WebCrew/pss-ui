import * as React from 'react';
import { importEvents } from '../services/EventService';
import { useState } from 'react';
import { ImportResult } from '../types';

interface FilePickerProps {
  setImportResult: (r: ImportResult) => void;
  setError: (e: string) => void;
  setUploading: (b: boolean) => void;
  setForce: (b: boolean) => void;
  force: boolean;
}

const handleChange = (selectorFiles: FileList | null, props: FilePickerProps) => {
  props.setUploading(true);
  if (selectorFiles && selectorFiles.length > 0) {
    importEvents(selectorFiles[0], props.force)
      .then(props.setImportResult)
      .catch(props.setError)
      .finally(() => props.setUploading(false));
  }
};

export default () => {
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [force, setForce] = useState(false);

  if (error) {
    return <FatalError error={error} />;
  } else if (uploading) {
    return <Uploading />;
  } else if (importResult !== null) {
    return <Uploaded importResult={importResult} />;
  } else {
    return <FilePicker {...{ setImportResult, setError, setUploading, setForce, force }} />;
  }
};

const FilePicker = (props: FilePickerProps) => (
  <div>
    <h3>CSV event import</h3>
    <input type="checkbox" onChange={e => props.setForce(e.target.checked)} />
    <span>Force unsafe operations. Use this only if you are confident the CSV contains only correct data!</span>
    <p>Select a CSV file</p>
    <input type="file" onChange={e => handleChange(e.target.files, props)} />
  </div>
);

const Uploading = () => (
  <div>
    <p>Uploading...</p>
  </div>
);

const Uploaded = ({ importResult }: { importResult: ImportResult }) => {
  let errors, warnings;
  if (importResult.errors.length > 0) {
    errors = <MessageList heading="Import errors" messages={importResult.errors} />;
  }
  if (importResult.warnings.length > 0) {
    warnings = <MessageList heading="Import warnings" messages={importResult.warnings} />;
  }
  return (
    <div>
      <h3>
        Import finished: {importResult.successCount} events imported successfully, {importResult.failureCount} events failed to import.
      </h3>
      {errors}
      {warnings}
    </div>
  );
};

const FatalError = ({ error }: { error: string }) => <p>Fatal error: {error} - did you choose a valid CSV file?</p>;

const MessageList = ({ heading, messages }: { heading: string; messages: Array<string> }) => (
  <>
    <p>{heading}</p>
    <ul>
      {messages.map(error => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  </>
);
