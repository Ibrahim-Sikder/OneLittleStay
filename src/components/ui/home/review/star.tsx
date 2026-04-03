export const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mt-3">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={s <= count ? "#F59E0B" : "#e5e7eb"}
      >
        <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z" />
      </svg>
    ))}
  </div>
);
