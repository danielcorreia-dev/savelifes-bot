import { FC } from 'react'
import { IconType } from 'react-icons/lib';

type ChatSuggestionsCardProps = {
  icon: IconType;
  title: string;
  description: string;
}

const ChatSuggestionsCard:FC<ChatSuggestionsCardProps> = ({ title, icon: Icon, description }) => {
  return (
    <div className='py-3 px-8 rounded-md border flex-col'>
      <div className='flex flex-col items-center'>
        <span className='mb-2'>

        {Icon && <Icon size={24} />}
        </span>
        <h2 className='text-base font-semibold mb-2 text-neutral-700'>
          {title}
        </h2>
        <span className='break-words text-xs text-neutral-500'>
          <p>
            {description}
          </p>
        </span>
      </div>
    </div>
  )
}

export default ChatSuggestionsCard