import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonArticles() {
  const skeletonItems = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="skeleton-item">
      <Skeleton
        height={24}
        width="100%"
        baseColor="var(--skeleton-main-cl)"
        highlightColor="var(--skeleton-extra-cl)"
        count={1}
        className="skeleton-full-width"
      />

      <div>
        <Skeleton
          height={16}
          width="30%"
          baseColor="var(--skeleton-main-cl)"
          highlightColor="var(--skeleton-extra-cl)"
          count={1}
          className="skeleton-partial-width"
        />
      </div>
    </div>
  ));
  return <div className="skeletonBox">{skeletonItems}</div>;
};
