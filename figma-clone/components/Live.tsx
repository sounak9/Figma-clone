import React from 'react'
import LiveCursor from './Cursor/LiveCursor'
import { useMyPresence, useOthers } from '@liveblocks/react'

const Live = () => {
    const others = useOthers();
    const [{cursor},updateMyPresence] = useMyPresence() as any;
  return (
    <div>
          <LiveCursor others={ others} />
    </div>
  )
}

export default Live
