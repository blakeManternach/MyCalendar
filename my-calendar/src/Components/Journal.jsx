import { useState } from "react";
import styles from "../syles/Journal.module.css";

export function Journal() {
  const [journalEntry, setJournalEntry] = useState("");

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
