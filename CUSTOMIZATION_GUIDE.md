# Portfolio Customization Guide

## How to Add/Change Project Images

### Step 1: Locate the Mock Data File
Open the file: `/app/frontend/src/data/mock.js`

### Step 2: Find the Projects Section
Look for the `export const projects = [...]` section. It looks like this:

```javascript
export const projects = [
  {
    id: 1,
    title: "InstaText: Deep Learning for Text Extraction",
    description: "Your project description here...",
    technologies: ["Python", "PyTorch", "TensorFlow", "OCR", "DONUT", "CNN"],
    achievements: [
      "Developed a CNN-based classifier...",
      "Improved accuracy from 56% to 81%",
    ],
    image: "YOUR_IMAGE_URL_HERE"  // <-- This is what you need to change!
  },
  // ... more projects
];
```

### Step 3: Change Project Images

**Option 1: Using Unsplash (Free Stock Photos)**
1. Go to https://unsplash.com
2. Search for images (e.g., "machine learning", "data visualization", "code")
3. Click on an image you like
4. Click "Download" or right-click and "Copy image address"
5. Paste the URL in the `image:` field

Example:
```javascript
image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800"
```

**Option 2: Using Your Own Images**
1. Upload your image to a hosting service (Imgur, Google Drive, Dropbox)
2. Get the direct image link
3. Replace the URL in the `image:` field

### Step 4: Save and Refresh
Save the file and refresh your browser. Your changes will appear immediately!

---

## How to Add More Projects

Copy this template and add it to the projects array:

```javascript
{
  id: 4,  // Make sure this is unique
  title: "Your New Project Name",
  description: "Brief description of what your project does and the problem it solves.",
  technologies: ["Python", "React", "MongoDB"],  // Add your tech stack
  achievements: [
    "Achievement 1 - quantify your results",
    "Achievement 2 - show impact",
    "Achievement 3 - highlight innovation"
  ],
  image: "https://images.unsplash.com/YOUR_IMAGE_URL"
}
```

---

## How to Change Your Profile Photo (About Section)

Open: `/app/frontend/src/components/About.jsx`

Find this line (around line 88):
```javascript
src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
```

Replace with your photo URL:
```javascript
src="YOUR_PHOTO_URL_HERE"
```

---

## How to Change Background Image (Hero Section)

Open: `/app/frontend/src/components/Hero.jsx`

Find this line (around line 35):
```javascript
backgroundImage: 'url(https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2065)',
```

Replace with your preferred background:
```javascript
backgroundImage: 'url(YOUR_IMAGE_URL)',
```

**Good background images:**
- Laptop/keyboard: https://unsplash.com/s/photos/laptop-keyboard
- Workspace: https://unsplash.com/s/photos/workspace
- Code: https://unsplash.com/s/photos/code-screen

---

## How to Update Your Information

Open: `/app/frontend/src/data/mock.js`

### Update Personal Info:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
  resumeUrl: "https://your-resume-url.pdf",
  bio: "Your bio text here..."
};
```

### Add/Edit Work Experience:
```javascript
export const workExperience = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    location: "City, State",
    period: "Jan 2023 - Present",
    description: [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3"
    ]
  }
];
```

### Update Skills:
```javascript
export const skills = {
  "Programming Languages": ["Python", "JavaScript", "Java"],
  "Machine Learning & AI": ["TensorFlow", "PyTorch", "Scikit-learn"],
  // Add more categories...
};
```

---

## Quick Tips for Finding Good Images

### For Projects:
- **Data Visualization**: https://unsplash.com/s/photos/data-visualization
- **Machine Learning**: https://unsplash.com/s/photos/machine-learning
- **Code/Programming**: https://unsplash.com/s/photos/programming
- **Analytics**: https://unsplash.com/s/photos/analytics

### For Profile Photo:
- Use a professional headshot
- Plain background works best
- Good lighting
- Square aspect ratio (1:1) recommended

### Image Size Recommendations:
- **Project images**: 800x600px (4:3 ratio)
- **Profile photo**: 400x400px (square)
- **Background**: 1920x1080px (landscape)

---

## Need Help?

If you're stuck, remember:
1. All image URLs must be in quotes: `"https://..."`
2. Don't forget commas between array items
3. Save the file after making changes
4. Refresh your browser to see updates

Happy customizing! 🎨
