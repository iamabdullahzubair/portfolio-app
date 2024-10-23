


// SkeletonCard.tsx
export const SkeletonCard = () => {
    return (
        <div className="animate-pulse bg-gray-200 shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-300 mb-4"></div>
                <div className="h-4 bg-gray-300"></div>
            </div>
        </div>
    );
};

export const SkeletonCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}