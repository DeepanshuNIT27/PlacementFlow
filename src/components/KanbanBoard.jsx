import React, { useRef, useEffect } from 'react';
import KanbanColumn from './KanbanColumn';
import KanbanCard from './KanbanCard';

const KanbanBoard = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = (evt) => {
      if (scrollRef.current) {
        evt.preventDefault();
        scrollRef.current.scrollLeft += evt.deltaY;
      }
    };
    
    const node = scrollRef.current;
    if (node) {
      node.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (node) {
        node.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section className="overflow-x-auto pb-xl" ref={scrollRef}>
      <div className="flex gap-lg min-h-[600px]">
        
        {/* Wishlist */}
        <KanbanColumn title="Wishlist" count={1}>
          <div className="flex-1 space-y-md p-xs">
            <KanbanCard 
              company="Microsoft" 
              role="SDE Intern" 
              priority="High" 
              priorityColor={{ text: 'text-error', bg: 'bg-error/10' }} 
              packageVal="₹12 LPA" 
              deadline="30 Aug" 
              borderClass="border-t-error" 
            />
          </div>
        </KanbanColumn>

        {/* Applied */}
        <KanbanColumn title="Applied" count={1}>
          <div className="flex-1 space-y-md p-xs">
            <KanbanCard 
              company="Google" 
              role="Software Engineer" 
              priority="High" 
              priorityColor={{ text: 'text-error', bg: 'bg-error/10' }} 
              packageVal="₹18 LPA" 
              deadline="25 Aug" 
              borderClass="border-t-error"
              ringClass="ring-1 ring-primary/40"
            />
          </div>
        </KanbanColumn>

        {/* OA */}
        <KanbanColumn title="OA" count={1}>
          <div className="flex-1 space-y-md p-xs">
            <KanbanCard 
              company="Amazon" 
              role="SDE I" 
              priority="Medium" 
              priorityColor={{ text: 'text-primary-container', bg: 'bg-primary-container/10' }} 
              packageVal="₹16 LPA" 
              deadline="20 Aug" 
              borderClass="border-t-primary-container" 
            />
          </div>
        </KanbanColumn>

        {/* Interview */}
        <KanbanColumn title="Interview" count={1}>
          <div className="flex-1 space-y-md p-xs">
            <KanbanCard 
              company="Adobe" 
              role="Member of Technical Staff" 
              priority="High" 
              priorityColor={{ text: 'text-error', bg: 'bg-error/10' }} 
              packageVal="₹22 LPA" 
              deadline="15 Aug" 
              borderClass="border-t-error" 
            />
          </div>
        </KanbanColumn>

        {/* Offer */}
        <KanbanColumn title="Offer" count={0} opacityClass="opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex-1 border-2 border-dashed border-outline-variant/20 rounded-xl flex items-center justify-center min-h-[400px]">
            <p className="text-on-surface-variant font-label-md">No offers yet</p>
          </div>
        </KanbanColumn>

        {/* Rejected */}
        <KanbanColumn title="Rejected" count={0} opacityClass="opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex-1 border-2 border-dashed border-outline-variant/20 rounded-xl flex items-center justify-center min-h-[400px]">
            <p className="text-on-surface-variant font-label-md">Clear</p>
          </div>
        </KanbanColumn>

      </div>
    </section>
  );
};

export default KanbanBoard;
