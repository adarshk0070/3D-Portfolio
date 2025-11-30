import { config } from "../../constants/config";
import { logo } from "../../assets";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="black-gradient relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-700 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-2xl text-secondary hover:text-white"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <img
            src={logo}
            alt={config.profile.name}
            className="h-32 w-32 rounded-full object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-white">{config.profile.name}</h1>
            <p className="text-xl text-violet-400">{config.profile.role}</p>
            <p className="mt-2 text-secondary">{config.profile.tagline}</p>
            <p className="mt-1 inline-block rounded-full bg-violet-900 px-4 py-1 text-sm text-violet-200">
              {config.profile.status}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6">
          <h2 className="mb-4 text-xl font-bold text-white">About</h2>
          <p className="leading-relaxed text-secondary">{config.profile.shortBio}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-semibold text-white">Contact</h3>
            <div className="space-y-2 text-sm text-secondary">
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${config.profile.email}`} className="text-violet-400 hover:text-violet-300">
                  {config.profile.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong> {config.profile.phone}
              </p>
              <p>
                <strong>Location:</strong> {config.profile.location}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-white">Social Links</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href={config.profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300"
                >
                  → GitHub
                </a>
              </p>
              <p>
                <a
                  href={config.profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300"
                >
                  → LinkedIn
                </a>
              </p>
              <p>
                <a
                  href={config.profile.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300"
                >
                  → LeetCode
                </a>
              </p>
              {config.profile.social.hackerrank && (
                <p>
                  <a
                    href={config.profile.social.hackerrank}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    → HackerRank
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href={`mailto:${config.profile.email}`}
            className="flex-1 rounded-lg bg-violet-600 px-6 py-3 text-center font-medium text-white hover:bg-violet-700"
          >
            Get in Touch
          </a>
          <a
            href={config.profile.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-violet-500 px-6 py-3 text-center font-medium text-violet-400 hover:bg-violet-900 hover:text-violet-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
