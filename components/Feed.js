import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";
export default function Feed() {
  const posts = [
    {
      id: 1,
      name: "sufyan",
      userame: "@sufyanmughal",
      userImage: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "We are looking to hire an  additional team member who can fill the position of Wix Website Specialist. The main function of this position is to design and edit pages on our real estate website using the WIX platform",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      name: "sufyan",
      userame: "@sufyanmughal",
      userImage: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "We are looking to hire an  additional team member who can fill the position of Wix Website Specialist. The main function of this position is to design and edit pages on our real estate website using the WIX platform",
      timestamp: "3 hours ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3  sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
