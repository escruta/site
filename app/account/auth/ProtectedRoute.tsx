import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "@account/hooks";
import { useEffect, useState } from "react";
import { Modal, Button } from "@account/components/ui";

export function ProtectedRoute() {
  const navigate = useNavigate();
  const { loading, isAuthenticated, currentUser, fetchUserData, signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignOut = () => {
    setIsModalOpen(false);
    signOut();
    navigate("/signin", { replace: true });
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const checkSession = async () => {
      if (isAuthenticated()) {
        const user = await fetchUserData();
        if (!user) {
          setIsModalOpen(true);
        }
      }
    };

    if (isAuthenticated()) {
      intervalId = setInterval(checkSession, 60_000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAuthenticated, fetchUserData, currentUser]);

  if (loading) {
    return null;
  }

  if (!isAuthenticated()) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <Outlet />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleSignOut}
          closeOnOutsideClick={false}
          closeOnEscape={false}
          title="Session expired"
          width="sm"
          actions={
            <Button onClick={handleSignOut} variant="primary">
              Sign in again
            </Button>
          }
        >
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Your session has expired. Please sign in again to continue managing your account.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ProtectedRoute;
