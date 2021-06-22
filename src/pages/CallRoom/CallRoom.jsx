import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext/AppContext';

import Logo from '../../components/logo/Logo';
import Chat from '../../components/chat/Chat';
import UserVideoBox from '../../components/user-video-box/UserVideoBox';
import CallControls from '../../components/call-controls/CallControls';

function CallRoom() {
  const { guestStream } = useContext(AppContext);
  
  return (
    <div className="grid w-full h-screen grid-cols-8 overflow-hidden bg-dark">
      <div className="flex flex-col h-full col-span-6 main-panel">
        <div className="py-3">
          <Logo textColor="white" />
        </div>

        <div className="flex flex-wrap content-center justify-center w-full h-full space-x-8 video-area">
          <UserVideoBox
            user="local"
            name="Me"
            color="bg-indigo-800"
          />

          { guestStream.current &&
            <UserVideoBox
              user="remote"
              name="Guest"
              color="bg-blue-800"
            />
          }
        </div>

        <div className="py-3">
          <CallControls />
        </div>
      </div>

      <div className="h-screen col-span-2 text-white rounded-l-lg bg-dark-tertiary side-panel">
        <Chat />
        <span></span>
      </div>
    </div>
  );
}

export default CallRoom;