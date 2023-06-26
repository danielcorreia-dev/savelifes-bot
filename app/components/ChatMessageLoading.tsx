import IconUserHeartLine from './icons/IconUserHeart';

export const ChatMessageLoading = () => {
  return (
    <div className="bg-gray-600/50 py-5">
      <div className="m-auto flex max-w-4xl items-center">
        <div className="mx-4 flex h-10 w-10 items-center justify-center rounded bg-gpt-ai-color md:ml-0 text-white">
          <IconUserHeartLine width={24} height={24} />
        </div>
        <div className="flex-1 whitespace-pre-wrap text-base">
          <div className="h-4 w-2 animate-pulse bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};
