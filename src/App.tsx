import { JapProvider } from "./store/JapStore";
import { ToastProvider } from "./store/ToastProvider";
import { I18nProvider } from "./store/I18n";
import { AppShell } from "./app/AppShell";

/**
 * Naam Jap Counter — the app.
 * Boots straight into the app shell: splash → (first run) language → tabs.
 */
export default function App() {
  return (
    <ToastProvider>
      <I18nProvider>
        <JapProvider>
          <AppShell />
        </JapProvider>
      </I18nProvider>
    </ToastProvider>
  );
}
