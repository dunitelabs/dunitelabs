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
      { heading: "Data we collect", body: "We collect no personal data. The app does not require sign-in. Library, playlists, and preferences stay on your device." },
      { heading: "Permissions", body: "Storage / Media permission is used only to read audio files you already own. No files are uploaded." },
      { heading: "Third parties", body: "No ads SDK, no analytics SDK, no trackers. Crash logs (if any) are anonymized and optional." },
      { heading: "Children", body: "Not directed to children under 13. No data knowingly collected from children." },
      { heading: "Changes", body: "We will update this page if the app changes. Last updated date is at the top." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
  "speedmaths-pro": {
    title: "Speedmaths Pro — Privacy Policy",
    lastUpdated: "23 Aug 2026",
    intro: "Speedmaths Pro helps you practice maths. We minimize data collection and never sell your data.",
    sections: [
      { heading: "Data we collect", body: "If you use the app without an account, we store only local progress (scores, streaks). If you create an account, we store email and display name solely to sync progress." },
      { heading: "Permissions", body: "No sensitive permissions. Internet is used only to sync quizzes and leaderboards." },
      { heading: "Third parties", body: "We may use anonymized analytics (e.g., Firebase) to improve the app. No ad targeting. No sale of data." },
      { heading: "Data retention", body: "Local data stays until you clear app data or delete your account. Account data is deleted on request." },
      { heading: "Children", body: "Not directed to children under 13. If you are a parent and believe data was collected, contact us." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
  "govtjobsnotice": {
    title: "GovtJobsNotice — Privacy Policy",
    lastUpdated: "23 Aug 2026",
    intro: "GovtJobsNotice is a website that aggregates public government job notices. We respect your privacy.",
    sections: [
      { heading: "Data we collect", body: "We do not require an account. If you subscribe to alerts (email/Telegram), we store only that contact to send updates." },
      { heading: "Cookies", body: "We use essential cookies for site function and anonymized analytics to understand traffic. No ad profiling." },
      { heading: "Third parties", body: "We embed no personal-data marketplaces. Analytics is anonymized." },
      { heading: "Your rights", body: "You can unsubscribe at any time. Email us to delete your contact." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
};

export const deleteBySlug: Record<string, LegalDoc> = {
  "guava-music": {
    title: "Guava Music — Delete Your Data",
    lastUpdated: "23 Aug 2026",
    intro: "Guava Music stores everything on-device. There is no server account to delete.",
    sections: [
      { heading: "How to delete", body: "1) Open Android Settings → Apps → Guava Music → Storage → Clear Data. 2) Uninstall the app. This removes all local playlists and preferences." },
      { heading: "Need help?", body: "Email us and we will guide you. No data is retained on our servers." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
  "speedmaths-pro": {
    title: "Speedmaths Pro — Delete Your Data",
    lastUpdated: "23 Aug 2026",
    intro: "You can delete your progress and account data at any time.",
    sections: [
      { heading: "In-app", body: "Open Speedmaths Pro → Settings → Delete Account. This erases cloud progress, email, and name within 7 days." },
      { heading: "By email", body: "Email support.dunitelabs@gmail.com with subject 'Delete my Speedmaths Pro data' and your registered email. We delete within 7 days and confirm." },
      { heading: "Local only?", body: "If you never created an account, just Clear Data in Android Settings; no server data exists." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
  "govtjobsnotice": {
    title: "GovtJobsNotice — Delete Your Data",
    lastUpdated: "23 Aug 2026",
    intro: "We hold only your subscription contact if you opted for alerts.",
    sections: [
      { heading: "Unsubscribe", body: "Click unsubscribe in any email or message /stop on Telegram." },
      { heading: "Full deletion", body: "Email support.dunitelabs@gmail.com with 'Delete my GovtJobsNotice data' and the email/phone to delete. We confirm within 7 days." },
    ],
    contact: "support.dunitelabs@gmail.com",
  },
};
