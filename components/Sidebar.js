import Image from "next/image";
import SideMenuItem from "./SideMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import { HashtagIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/outline";
import { InboxIcon } from "@heroicons/react/outline";
import { BookmarkIcon } from "@heroicons/react/outline";
import { ClipboardIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width={50}
          height={50}
          src={
            "https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          }
        ></Image>
      </div>

      {/*Menu*/}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SideMenuItem text="Home" Icon={HomeIcon} active />
        <SideMenuItem text="Explore" Icon={HashtagIcon} />
        <SideMenuItem text="Notificationa" Icon={BellIcon} />
        <SideMenuItem text="Messgaes" Icon={InboxIcon} />
        <SideMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SideMenuItem text="Lists" Icon={ClipboardIcon} />
        <SideMenuItem text="Profie" Icon={UserIcon} />
        <SideMenuItem text="Profie" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/*Buttons*/}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>
      {/*Mini Profile*/}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image
          width={10}
          height={10}
          className="rounded-full xl:mr-2"
          src={
            "https://pbs.twimg.com/profile_images/1580935221490454530/OC9HpLqv_400x400.jpg"
          }
          alt="user-image"
        />
        <div className="leading-5 hidden xl:inline ">
          <h4 className="font-bold">sufyan</h4>
          <p className="text-gray-500">@sufyanmughal</p>
        </div>
        <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline " />
      </div>
    </div>
  );
}
