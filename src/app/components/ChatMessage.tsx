type Props = {
    role: string;
    content: string;
  };
  
  export default function ChatMessage({ role, content }: Props) {
    const isUser = role === 'user';
    return (
      <div className={`p-2 rounded ${isUser ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}>
        <p><strong>{isUser ? 'You' : 'Bot'}:</strong> {content}</p>
      </div>
    );
  }
  