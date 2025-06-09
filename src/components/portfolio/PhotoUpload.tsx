
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload } from 'lucide-react';
import { toast } from 'sonner';

interface PhotoUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

export const PhotoUpload = ({ onImageUpload }: PhotoUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onImageUpload(result);
      toast.success('Profile photo updated successfully!');
      setIsUploading(false);
    };

    reader.onerror = () => {
      toast.error('Failed to upload image');
      setIsUploading(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-2 sm:right-6 z-50">
      <Card className="p-3 sm:p-4 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl shadow-2xl border-2 border-emerald-500/40 hover:border-emerald-400/60 transition-all duration-500 hover:shadow-emerald-500/30 hover:-translate-y-1 rounded-xl">
        <div className="text-center">
          <p className="text-xs sm:text-sm font-medium text-emerald-200 mb-2 sm:mb-3">Update Profile Photo</p>
          <label htmlFor="photo-upload">
            <Button
              className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-400/50 transition-all duration-500 hover:scale-105 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg"
              disabled={isUploading}
              asChild
            >
              <span className="cursor-pointer flex items-center gap-1 sm:gap-2">
                <Upload size={14} />
                {isUploading ? 'Uploading...' : 'Upload Photo'}
              </span>
            </Button>
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <p className="text-xs text-emerald-300/80 mt-1 sm:mt-2">Max 5MB • JPG, PNG, GIF</p>
        </div>
      </Card>
    </div>
  );
};
