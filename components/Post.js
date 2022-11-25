import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/outline";
export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/**user image*/}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.userImage}
        alt="user-image"
      />
      {/*right side*/}
      <div className="">
        {/*header*/}
        <div className="flex flex-items-center justify-between">
          {/*post user info*/}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px] ">@{post.userame}-</span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          <DotsHorizontalIcon className="h-10 hoverEffect w-10hover:bg-sky-100 hover:text-sky-500 p-2" />
          {/*Icon */}
        </div>
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>
        <img className="rounded-2xl mr-2" src={post.img} alt="" />
        {/*post text*/}
        {/*post image*/}
        {/*icons*/}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
