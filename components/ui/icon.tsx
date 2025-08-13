import { type IconName } from '@/constants/landing';
import {
  DocumentIcon,
  SettingsIcon,
  CodeIcon,
  ArchitectureIcon,
  WarningIcon,
  QuestionIcon,
  LightningIcon,
  BookIcon,
  BoltIcon,
  BookOpenIcon,
  DisplayIcon,
  RocketIcon,
} from './icons';

interface IconProps {
  name: IconName;
  className?: string;
}

const iconMap = {
  DocumentIcon,
  SettingsIcon,
  CodeIcon,
  ArchitectureIcon,
  WarningIcon,
  QuestionIcon,
  LightningIcon,
  BookIcon,
  BoltIcon,
  BookOpenIcon,
  DisplayIcon,
  RocketIcon,
};

export default function Icon({ name, className = 'w-5 h-5' }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} />;
}
