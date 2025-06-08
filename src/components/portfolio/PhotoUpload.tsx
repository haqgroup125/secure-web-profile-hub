
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { upload } from 'lucide-react';
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
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="p-4 bg-white shadow-lg border-blue-200">
        <div className="text-center">
          <p className="text-sm font-medium text-slate-700 mb-3">Update Profile Photo</p>
          <label htmlFor="photo-upload">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              disabled={isUploading}
              asChild
            >
              <span className="cursor-pointer flex items-center gap-2">
                <upload size={16} />
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
          <p className="text-xs text-slate-500 mt-2">Max 5MB • JPG, PNG, GIF</p>
        </div>
      </Card>
    </div>
  );
};
