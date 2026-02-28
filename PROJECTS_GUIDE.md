# 📝 How to Manage Your Projects

## Quick Guide

Edit the file: `src/data/projects.json`

### ➕ Add a New Project

Add a new object to the array:

```json
{
  "title": "Your Project Name",
  "description": "Brief description of your project",
  "icon": "Activity",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "liveUrl": "https://your-live-url.com",
  "githubUrl": "https://github.com/your-repo",
  "gradient": "from-cyan-500/20 to-blue-600/20",
  "borderGlow": "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
}
```

### ✏️ Edit a Project

Find the project in the JSON file and modify any field.

### 🗑️ Delete a Project

Remove the entire project object from the array.

## Available Icons

- `Activity` - Health/fitness related
- `Bot` - AI/chatbot projects
- `Brain` - ML/AI/intelligence projects

## Color Gradients (Copy & Paste)

- **Cyan/Blue**: `"gradient": "from-cyan-500/20 to-blue-600/20"`, `"borderGlow": "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"`
- **Purple/Pink**: `"gradient": "from-purple-500/20 to-pink-600/20"`, `"borderGlow": "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"`
- **Blue/Cyan**: `"gradient": "from-blue-500/20 to-cyan-600/20"`, `"borderGlow": "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"`
- **Green/Emerald**: `"gradient": "from-green-500/20 to-emerald-600/20"`, `"borderGlow": "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"`
- **Orange/Red**: `"gradient": "from-orange-500/20 to-red-600/20"`, `"borderGlow": "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"`

## Example: Complete Project Entry

```json
{
  "title": "AI Image Generator",
  "description": "Generate stunning images using Stable Diffusion and custom prompts. Built with Python, FastAPI, and React.",
  "icon": "Brain",
  "tags": ["Python", "FastAPI", "Stable Diffusion", "React"],
  "liveUrl": "https://my-image-gen.vercel.app",
  "githubUrl": "https://github.com/username/ai-image-gen",
  "gradient": "from-purple-500/20 to-pink-600/20",
  "borderGlow": "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
}
```

## 💡 Tips

- Keep descriptions under 200 characters for best display
- Use 3-5 tags per project
- Use `#` for liveUrl or githubUrl if not available
- Save the file and refresh your browser to see changes
