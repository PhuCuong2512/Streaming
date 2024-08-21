"use client";

import { onBlock, onUnBlock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionProps {
  isFollowing: boolean;
  userId: string;
}

export const Action = ({ isFollowing, userId }: ActionProps) => {
  const [isPending, startTransition] = useTransition();
  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`Theo dõi ${data.following.username} thành công`)
        )
        .catch(() => toast.error("Theo dõi thất bại"));
    });
  };
  // Truy cập vào hàm onUnfollow để hủy theo dõi
  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`Bỏ theo dõi ${data.following.username}`))
        .catch(() => toast.error("Theo dõi thất bại"));
    });
  };
  //
  const onClick = () => {
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };
  //
  const handleBlock = () => {
    startTransition(() => {
      onUnBlock(userId)
        .then((data) => toast.success(`Đã chặn ${data.blocked.username}`))
        .catch(() => toast.error("Chặn thất bại"));
    });
  };

  return (
    <>
      <Button disabled={isPending} onClick={onClick} variant="primary">
        {isFollowing ? "Bỏ theo dõi" : "Theo dõi"}
      </Button>
      <Button onClick={handleBlock} disabled={isPending}>
        Block{" "}
      </Button>
    </>
  );
};
