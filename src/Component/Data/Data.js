import { faCircleHalfStroke, faCoins, faEarthAsia, faGear, faKeyboard, faPerson, faQuestion, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const DATA_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    title: "English",
                    code: "en",
                },
                {
                    title: "Viet Nam",
                    code: "vn",
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: "Feedback and help",
        to: "/feedbackAndHelp"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
        title: "Dark Mode"
    },


]

export const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: "View profile",
        to: "/profile"
    },

    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: "Get Coins",
        to: "/feedback"
    },

    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: "Settings",
        to: "/settings"
    },

    ...DATA_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignIn} />,
        title: "Log out",
        to: "/logout",
        separate: true
    },


]
