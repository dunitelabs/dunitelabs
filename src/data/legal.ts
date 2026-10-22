export type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { heading: string; body: string }[];
  contact: string;
};

export const privacyBySlug: Record<string, LegalDoc> = {
  "guava-music": {
    title: "Guava Music — Privacy Policy",
    lastUpdated: "23 Aug 2026",
    intro: "Guava Music is an offline music player. We do not collect, sell, or share your personal data. All playback happens on-device.",
    sections: [
      { heading: "Data we collect", body: "We collect no personal data. The app does not require sign‑in. Library, playlists, and preferences stay on your device." },
      { heading: "Permissions", body: "Storage / Media permission is used only to read audio files you already own. No files are uploaded." },
      { heading: "Third parties", body: "No ads SDK, no analytics SDK, no trackers. Crash logs (if any) are anonymized and optional." },
      { heading: "Children", body: "Not directed to children under 13. No data knowingly collected from children." },
      { heading: "Changes", body: "We will update this page if the app changes. Last updated date is at the top." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },

  "speedmaths-pro": {
    title: "SpeedMaths Pro — Privacy Policy",
    lastUpdated: "22 Oct 2026",
    intro:
      "SpeedMaths Pro is a mental‑math trainer for competitive‑exam aspirants. " +
      "We collect the minimum data needed for the leaderboard, streak sync and offline practice, " +
      "and we never sell your data.",
    sections: [
      {
        heading: "Data we collect",
        body:
          "<ul>" +
          "<li><strong>Anonymous Firebase Auth UID</strong> – created on first launch (anonymous sign‑in) so the same installation can read/write its own leaderboard row and keep a streak across devices.</li>" +
          "<li><strong>Leaderboard score</strong> (score, average time, optional display name) – stored in Cloud Firestore under <code>leaderboard/{date}/scores/{uid}</code> for the daily ranking.</li>" +
          "<li><strong>User profile document</strong> (<code>users/{uid}</code>) – optional display name, chosen reminder time, theme preference, streak counters.</li>" +
          "<li><strong>Local practice history</strong> – quiz results, level progress, custom‑practice settings, wrong‑answer list, streak data. Kept in an on‑device SQLite database (<code>sqflite</code>).</li>" +
          "<li><strong>App preferences</strong> – theme, reminder time, onboarding flag in <code>SharedPreferences</code>.</li>" +
          "</ul>" +
          "<p>We <strong>do not</strong> collect email, phone, contacts, location, camera, microphone, advertising IDs or any other personally‑identifiable information.</p>"
      },
      {
        heading: "Permissions",
        body:
          "Only the <strong>Internet</strong> permission is used (Firebase Auth + Firestore). " +
          "No sensitive permissions (location, contacts, camera, microphone, SMS, call‑log) are requested."
      },
      {
        heading: "Third‑party services",
        body:
          "<ul>" +
          "<li><strong>Firebase Authentication (anonymous)</strong> – receives a random UID only.</li>" +
          "<li><strong>Cloud Firestore</strong> – stores the leaderboard rows, optional display name, reminder time, theme, streak.</li>" +
          "<li><strong>Google Play Services</strong> – required by Firebase; we do not use its identifiers directly.</li>" +
          "</ul>" +
          "<p>All third‑party processors are covered by Google's own privacy policies and Data‑Processing Addendum.</p>"
      },
      {
        heading: "Data retention",
        body:
          "<ul>" +
          "<li>Leaderboard documents are kept for a rolling 30‑day window and then removed automatically by a Cloud Function.</li>" +
          "<li>The Firestore user profile (<code>users/{uid}</code>) persists until you request deletion (see “Delete Your Data”).</li>" +
          "<li>All local SQLite data and <code>SharedPreferences</code> remain on the device until you use the in‑app <strong>Delete my data</strong> button or clear the app's storage from Android Settings.</li>" +
          "</ul>"
      },
      {
        heading: "Children's privacy",
        body:
          "The app is not directed to children under 13 (or the local equivalent). " +
          "We do not knowingly collect data from children. If a parent discovers a child has entered a display name, contact us and we will delete it immediately."
      },
      {
        heading: "Changes to this policy",
        body:
          "Any material change will be posted on this page with a new “Last updated” date. " +
          "The in‑app link always points to the current version."
      }
    ],
    contact: "dunitelabs.support@gmail.com",
  },

  "govtjobsnotice": {
    title: "GovtJobsNotice — Privacy Policy",
    lastUpdated: "23 Aug 2026",
    intro: "GovtJobsNotice is a website that aggregates public government job notices. We respect your privacy.",
    sections: [
      { heading: "Data we collect", body: "We do not require an account. If you subscribe to alerts (email/Telegram), we store only that contact to send updates." },
      { heading: "Cookies", body: "We use essential cookies for site function and anonymized analytics to understand traffic. No ad profiling." },
      { heading: "Third parties", body: "We embed no personal‑data marketplaces. Analytics is anonymized." },
      { heading: "Your rights", body: "You can unsubscribe at any time. Email us to delete your contact." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
};

export const deleteBySlug: Record<string, LegalDoc> = {
  "guava-music": {
    title: "Guava Music — Delete Your Data",
    lastUpdated: "23 Aug 2026",
    intro: "Guava Music stores everything on‑device. There is no server account to delete.",
    sections: [
      { heading: "How to delete", body: "1) Open Android Settings → Apps → Guava Music → Storage → Clear Data. 2) Uninstall the app. This removes all local playlists and preferences." },
      { heading: "Need help?", body: "Email us and we will guide you. No data is retained on our servers." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },

  "speedmaths-pro": {
    title: "SpeedMaths Pro — Delete Your Data",
    lastUpdated: "22 Oct 2026",
    intro:
      "You can erase every piece of data the app holds about you – both locally and in the cloud – with a single tap or by email.",
    sections: [
      {
        heading: "In‑app (recommended)",
        body:
          "<ol>" +
          "<li>Open <strong>SpeedMaths Pro</strong> → <strong>Profile</strong> → <strong>Settings</strong> → <strong>Delete my data</strong>.</li>" +
          "<li>The app calls <code>FirebaseService.deleteAllUserData()</code> which:" +
          "<ul>" +
          "<li>Deletes the Firestore document <code>users/{uid}</code>.</li>" +
          "<li>Removes every daily‑score row <code>leaderboard/{date}/scores/{uid}</code>.</li>" +
          "</ul>" +
          "</li>" +
          "<li>It then wipes the on‑device SQLite database (<code>LocalDatabase.wipeAllUserData()</code>) and clears <code>SharedPreferences</code>.</li>" +
          "<li>The anonymous Firebase Auth UID is also removed, so the installation can no longer be linked to any historic record.</li>" +
          "</ol>"
      },
      {
        heading: "By email (if you cannot open the app)",
        body:
          "Send a message to <a href=\"mailto:dunitelabs.support@gmail.com\">dunitelabs.support@gmail.com</a> " +
          "with subject <strong>“Delete my SpeedMaths Pro data”</strong> and include the UID shown in <em>Profile → About</em> " +
          "(or the email you used for any optional sign‑in). We will run the same server‑side cleanup within 48 hours and reply with confirmation."
      },
      {
        heading: "Local‑only usage (no account ever created)",
        body:
          "If you never entered a display name, the app only stores data locally. " +
          "Simply go to <strong>Android Settings → Apps → SpeedMaths Pro → Storage → Clear Data</strong> (or uninstall). No server‑side data exists."
      }
    ],
    contact: "dunitelabs.support@gmail.com",
  },

  "govtjobsnotice": {
    title: "GovtJobsNotice — Delete Your Data",
    lastUpdated: "23 Aug 2026",
    intro: "We hold only your subscription contact if you opted for alerts.",
    sections: [
      { heading: "Unsubscribe", body: "Click unsubscribe in any email or send /stop on Telegram." },
      { heading: "Full deletion", body: "Email support.dunitelabs@gmail.com with ‘Delete my GovtJobsNotice data’ and the email/phone to delete. We confirm within 7 days." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
};