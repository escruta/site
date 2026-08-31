import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useAuth } from "@account/hooks";
import { BACKEND_BASE_URL } from "@account/config";

export function DeviceLoginHandler() {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  const processed = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (loading || !currentUser) return;

    const params = new URLSearchParams(location.search);
    const deviceCode = params.get("device_code");
    if (!deviceCode || processed.current.has(deviceCode)) return;

    processed.current.add(deviceCode);

    fetch(`${BACKEND_BASE_URL}/device/authorize?device_code=${encodeURIComponent(deviceCode)}`, {
      method: "POST",
      credentials: "include",
    })
      .catch((err) => console.error("[device-login] authorize request failed", err))
      .finally(() => {
        params.delete("device_code");
        const query = params.toString();
        const newUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
        window.history.replaceState({}, "", newUrl);
      });
  }, [currentUser, loading, location.search]);

  return null;
}
