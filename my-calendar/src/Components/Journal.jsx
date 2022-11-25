import { useState, useEffect } from "react";
import styles from "../syles/Journal.module.css";

export function Journal(props) {
  const [journalEntry, setJournalEntry] = useState("");

  useEffect(() => {
    if (!props.Entry) return;
    setJournalEntry(props.Entry.entryText);
  }, [props.Entry]);

  return (
    <div className={styles.Journal}>
      <h3 style={{ marginBottom: "10px" }}>Journal</h3>
      <textarea
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
      />
    </div>
  );
}
