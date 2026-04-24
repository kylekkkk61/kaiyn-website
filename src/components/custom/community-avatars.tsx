"use client";

import { AvatarCircles } from "@/components/ui/avatar-circles";

const avatars = [
  { imageUrl: "https://i.pravatar.cc/150?img=12", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=32", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=47", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=68", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=5", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/150?img=26", profileUrl: "#" },
];

export function CommunityAvatars() {
  return (
    <div className="light">
      <AvatarCircles
        avatarUrls={avatars}
        numPeople={99}
        className="[&_img]:border-0 [&>a:last-child]:border-0 [&>a:last-child]:bg-white/20 [&>a:last-child]:backdrop-blur-md [&>a:last-child]:hover:bg-white/30"
      />
    </div>
  );
}
