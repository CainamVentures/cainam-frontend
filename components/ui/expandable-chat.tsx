'use client';

import { cn } from '@/lib/utils';
import { MessageCircle, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Button } from './button';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from './chat-bubble';
import { ChatInput } from './chat-input';
import { ChatMessageList } from './chat-message-list';

export type ChatPosition = 'bottom-right' | 'bottom-left';
export type ChatSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const chatConfig = {
    dimensions: {
        sm: 'sm:max-w-sm sm:max-h-[500px]',
        md: 'sm:max-w-md sm:max-h-[600px]',
        lg: 'sm:max-w-lg sm:max-h-[700px]',
        xl: 'sm:max-w-xl sm:max-h-[800px]',
        full: 'sm:w-full sm:h-full',
    },
    positions: {
        'bottom-right': 'bottom-5 right-5',
        'bottom-left': 'bottom-5 left-5',
    },
    chatPositions: {
        'bottom-right': 'sm:bottom-[calc(100%+10px)] sm:right-0',
        'bottom-left': 'sm:bottom-[calc(100%+10px)] sm:left-0',
    },
    states: {
        open: 'pointer-events-auto opacity-100 visible scale-100 translate-y-0',
        closed: 'pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5',
    },
};

interface ExpandableChatProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: ChatPosition;
    size?: ChatSize;
    icon?: React.ReactNode;
}

const ExpandableChat: React.FC<ExpandableChatProps> = ({
    className,
    position = 'bottom-right',
    size = 'md',
    icon,
    children,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div
            className={cn(`fixed ${chatConfig.positions[position]} z-50`, className)}
            {...props}
            data-oid="0z440z4"
        >
            <div
                ref={chatRef}
                className={cn(
                    'flex flex-col bg-background border sm:rounded-lg shadow-md overflow-hidden transition-all duration-250 ease-out sm:absolute sm:w-[90vw] sm:h-[80vh] fixed inset-0 w-full h-full sm:inset-auto',
                    chatConfig.chatPositions[position],
                    chatConfig.dimensions[size],
                    isOpen ? chatConfig.states.open : chatConfig.states.closed,
                    className,
                )}
                data-oid="e2x-zhb"
            >
                {children}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 sm:hidden"
                    onClick={toggleChat}
                    data-oid="673qv0s"
                >
                    <X className="h-4 w-4" data-oid="1fo:-nj" />
                </Button>
            </div>
            <ExpandableChatToggle
                icon={icon}
                isOpen={isOpen}
                toggleChat={toggleChat}
                data-oid="relqdgg"
            />
        </div>
    );
};

ExpandableChat.displayName = 'ExpandableChat';

const ExpandableChatHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => (
    <div
        className={cn('flex items-center justify-between p-4 border-b', className)}
        {...props}
        data-oid="inoly8-"
    />
);

ExpandableChatHeader.displayName = 'ExpandableChatHeader';

const ExpandableChatBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => <div className={cn('flex-grow overflow-y-auto', className)} {...props} data-oid="ae_f3by" />;

ExpandableChatBody.displayName = 'ExpandableChatBody';

const ExpandableChatFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => <div className={cn('border-t p-4', className)} {...props} data-oid="w9yvrp_" />;

ExpandableChatFooter.displayName = 'ExpandableChatFooter';

interface ExpandableChatToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    isOpen: boolean;
    toggleChat: () => void;
}

const ExpandableChatToggle: React.FC<ExpandableChatToggleProps> = ({
    className,
    icon,
    isOpen,
    toggleChat,
    ...props
}) => (
    <Button
        variant="default"
        onClick={toggleChat}
        className={cn(
            'w-14 h-14 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:shadow-black/30 transition-all duration-300',
            className,
        )}
        {...props}
        data-oid="erc10yj"
    >
        {isOpen ? (
            <X className="h-6 w-6" data-oid="k8.4jmx" />
        ) : (
            icon || <MessageCircle className="h-6 w-6" data-oid="68-7bbq" />
        )}
    </Button>
);

ExpandableChatToggle.displayName = 'ExpandableChatToggle';

export {
    ChatBubble,
    ChatBubbleAvatar,
    ChatBubbleMessage,
    ChatInput,
    ChatMessageList,
    ExpandableChat,
    ExpandableChatBody,
    ExpandableChatFooter,
    ExpandableChatHeader,
};
