import type { BaseTranslation } from "../i18n-types";

const warning: BaseTranslation = {
    title: "Warning!",
    content: `This world is close to its limit!. You can upgrade its capacity <a href="{upgradeLink}" target="_blank">here</a>`,
    limit: "This world is close to its limit!",
    accessDenied: {
        camera: "カメラの使用が拒否されました。ここをクリックしてカメラの使用を許可してください。",
        screenSharing: "画面共有が拒否されました。ここをクリックして画面共有の使用を許可してください。",
        teleport: "テレポートする権限がないみたいだよ",
        room: "Room access denied. You are not allowed to enter this room.",
    },
    importantMessage: "大事なメッセージ",
    connectionLost: "接続が切れました。接続を試します...",
    connectionLostTitle: "接続が切れました",
    connectionLostSubtitle: "接続をためしています...",
    waitingConnectionTitle: "接続を待っています。",
    waitingConnectionSubtitle: "接続中...",
};

export default warning;
