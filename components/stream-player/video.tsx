"use client";

import { ConnectionState, Track } from "livekit-client";
import { 
    useConnectionState,
    useRemoteParticipant,
    useTracks
 } from "@livekit/components-react";
import { OfflineVideo } from "./offline-video";
import { LoadingVideo } from "./loading-video";
import { LiveVideo } from "./live-video";

interface VideoProps {
    hostname: string;
    hostIdentity: string;
}

export const Video = ({hostname, hostIdentity}: VideoProps) => {
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(hostIdentity)
    const tracks = useTracks([
        Track.Source.Camera,
        Track.Source.Microphone
    ]).filter((track) => track.participant.identity === hostIdentity);

    let content;

    if (!participant && connectionState === ConnectionState.Connected) {
        content = <OfflineVideo username={hostname} />;
    } else if (!participant || tracks.length === 0) {
        content = <LoadingVideo label={connectionState}/>
    } else {
        content = <LiveVideo participant={participant}/>
    };
    return (
        <div className="aspect-video border-b group relative">
            {content}
        </div>
    )
}