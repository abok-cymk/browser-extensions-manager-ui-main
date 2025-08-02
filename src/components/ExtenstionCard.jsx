import { memo, useCallback } from "react";
import { IoToggle } from "react-icons/io5";
import clsx from "clsx";

const ExtenstionCard = memo(
  ({ logo, name, description, isActive, onRemove, onToggle }) => {
    const handleRemove = useCallback(() => {
      onRemove(name);
    }, [onRemove, name]);

    const handleToggle = useCallback(() => {
      onToggle(name);
    }, [onToggle, name]);

    return (
      <div className="bg-extensionCardLight dark:bg-extensionCard shadow rounded-lg p-4 h-auto w-full">
        <div className="flex flex-col justify-between gap-6">
          <div className="flex gap-3 mb-6">
            <figure className="flex-shrink-0">
              <img
                src={logo}
                alt={`${name} extension logo`}
                className="h-12 w-12 object-cover"
                loading="lazy"
              />
            </figure>
            <div className="flex-1 min-w-0">
              <h4
                className="text-sm text-Neutral-800 dark:text-Neutral-0 font-bold pb-1 truncate"
                title={name}
              >
                {name}
              </h4>
              <p
                className="text-xs text-Neutral-700 dark:text-Neutral-300 line-clamp-2"
                title={description}
              >
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleRemove}
              className="text-xs font-500 text-neutral-800 dark:text-neutral-100 bg-removeBtnLight dark:bg-removeBtnDark shadow outline outline-neutral-400 dark:outline-neutral-600 rounded-full cursor-pointer px-4 py-2 transition-all duration-200"
              aria-label={`Remove ${name} extension`}
            >
              Remove
            </button>
            <button
              onClick={handleToggle}
              className="cursor-pointer"
              aria-label={`${
                isActive ? "Disable" : "Enable"
              } ${name} extension`}
            >
              <IoToggle
                size={32}
                className={clsx(
                  isActive
                    ? "text-red-400"
                    : "text-neutral-400 dark:text-gray-500 rotate-180"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

ExtenstionCard.displayName = "ExtenstionCard";

export default ExtenstionCard;
