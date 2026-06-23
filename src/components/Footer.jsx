import { Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-navy">Tran Thu Ha</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring inline-flex w-fit items-center gap-2 rounded text-slate-600 transition hover:text-teal"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} />
            {profile.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
