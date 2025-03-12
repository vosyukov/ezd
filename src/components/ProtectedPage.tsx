import { Navigate, useNavigate } from 'react-router-dom';
import { backButton } from '@telegram-apps/sdk-react';
import { PropsWithChildren, useEffect } from 'react';
import { getJwt } from '@/jwt.storage.ts';

export function ProtectedPage({
    children,
    back = true,
}: PropsWithChildren<{
    /**
     * True if it is allowed to go back from this page.
     */
    back?: boolean;
}>) {
    const navigate = useNavigate();

    useEffect(() => {
        if (back) {
            backButton.show();
            return backButton.onClick(() => {
                navigate(-1);
            });
        }
        backButton.hide();
    }, [back]);

    if (!getJwt()) {
        return <Navigate to="/auth" replace />;
    }

    return <>{children}</>;
}
