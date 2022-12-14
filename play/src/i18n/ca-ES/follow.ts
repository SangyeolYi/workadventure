import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const follow: DeepPartial<Translation["follow"]> = {
    interactStatus: {
        following: "Seguint a {leader}",
        waitingFollowers: "Esperant la confirmaciÃ³ dels seguidors",
        followed: {
            one: "{follower} et segueix",
            two: "{firstFollower} i {secondFollower} et segueixen",
            many: "{followers} i {lastFollower} et segueixen",
        },
    },
    interactMenu: {
        title: {
            interact: "InteracciÃ³",
            follow: "Voleu seguir a {leader}?",
        },
        stop: {
            leader: "Voleu deixar de liderar?",
            follower: "Voleu deixar de seguir a {leader}?",
        },
        yes: "Si",
        no: "No",
    },
};

export default follow;
