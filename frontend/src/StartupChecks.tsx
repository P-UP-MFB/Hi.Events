import {useGetMe} from "./queries/useGetMe.ts";
import {useEffect} from "react";
import {i18n} from "@lingui/core";

export const StartupChecks = () => {
    // Skip authentication checks on the landing page (root path)
    const isLandingPage = typeof window !== 'undefined' && window.location.pathname === '/';
    
    const {data: user} = useGetMe({ enabled: !isLandingPage });

    useEffect(() => {
        if (user?.locale) {
            i18n.activate(user.locale);
        }
    }, [user?.locale]);

    return null;
};