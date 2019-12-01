import * as React from 'react';
import { importEvents } from '../services/EventService';
import { useState } from 'react';
import { ImportResult } from '../types';
import styled from 'styled-components';

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
    <HelpBox />
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

const HelpTable = styled.table`
  & td {
    border-top: 1px dotted;
  }
`;

const HelpBox = () => (
  <>
    <h3>Info</h3>
    <p>
      The CSV import format is the same as the export, therefore it's possible to do mass edits with external programs or even create new parties with some
      events "copied" from previous parties.
    </p>
    <p>
      Note: The importer will try to prevent you from doing changes that rarely make sense, such as moving Summer 19 closing ceremony to Winter 20 party. You
      can override these protections with the 'Force unsafe operations.' checkbox above prior to importing.
    </p>
    <p>Notes on the terminology:</p>
    <ul>
      <li>Event: A single "event" happening on a party, for example the closing ceremony.</li>
      <li>Party: The actual party, such as summer19 or winter20</li>
    </ul>
    <h3>CSV Columns (order does not matter, column headers must be on 1st row of the CSV)</h3>
    <HelpTable>
      <tbody>
        <tr>
          <th>Column name/code</th>
          <th>Description</th>
          <th>Required field/column?</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>id</td>
          <td>Event ID in the database</td>
          <td></td>
          <td>
            This links the exported/imported event to an existing event in the database. To create new events, this column must be empty/missing. To modify
            existing events, the ID must be correct.
          </td>
        </tr>
        <tr>
          <td>name</td>
          <td>Name of the event</td>
          <td>Yes</td>
          <td>This must be unique within a party</td>
        </tr>
        <tr>
          <td>description</td>
          <td>Description of the event</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>startTime</td>
          <td>Starting time</td>
          <td>Yes</td>
          <td></td>
        </tr>
        <tr>
          <td>endTime</td>
          <td>Ending time</td>
          <td>Yes</td>
          <td></td>
        </tr>
        <tr>
          <td>originalStartTime</td>
          <td>Original starting time</td>
          <td></td>
          <td>Used when events get rescheduled/delayed</td>
        </tr>
        <tr>
          <td>url</td>
          <td>URL for the event</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>mediaUrl</td>
          <td>Media URL for the event</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>location</td>
          <td>Location for the event</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>party</td>
          <td>The party this event happens on</td>
          <td>Yes</td>
          <td></td>
        </tr>
        <tr>
          <td>isPublic</td>
          <td>Is this event published?</td>
          <td></td>
          <td>Defaults to false.</td>
        </tr>
        <tr>
          <td>prepStartTime</td>
          <td>Event preparations begin</td>
          <td></td>
          <td>Not visible publicly. Used internally for planning</td>
        </tr>
        <tr>
          <td>postEndTime</td>
          <td>Event "post cleanup" ends</td>
          <td></td>
          <td>Not visible publicly. Used internally for planning</td>
        </tr>
      </tbody>
    </HelpTable>
  </>
);
