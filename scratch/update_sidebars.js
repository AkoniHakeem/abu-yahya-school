const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: 'src/app/billing/page.tsx',
    componentName: 'StudentSidebar',
    activePath: '/billing',
    isNav: true
  },
  {
    path: 'src/app/admin/dashboard/page.tsx',
    componentName: 'AdminSidebar',
    activePath: '/admin/dashboard',
    isNav: true
  },
  {
    path: 'src/app/admin/classes/page.tsx',
    componentName: 'AdminSidebar',
    activePath: '/admin/classes',
    isNav: true
  },
  {
    path: 'src/app/admin/users/page.tsx',
    componentName: 'AdminSidebar',
    activePath: '/admin/users',
    isNav: false
  },
  {
    path: 'src/app/tutor/classroom/page.tsx',
    componentName: 'TutorSidebar',
    activePath: '/tutor/classroom',
    isNav: true
  },
  {
    path: 'src/app/tutor/scheduling/page.tsx',
    componentName: 'TutorSidebar',
    activePath: '/tutor/scheduling',
    isNav: true
  },
  {
    path: 'src/app/tutor/assignments/grade/page.tsx',
    componentName: 'TutorSidebar',
    activePath: '/tutor/assignments/grade',
    isNav: false
  }
];

const workspaceDir = '/Ubuntu-24.04/home/akonimayowa/projects/abu-yahya-school';

for (const page of pages) {
  const fullPath = path.join(workspaceDir, page.path);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Add import statement if it doesn't exist
  const importStatement = `import ${page.componentName} from '@/components/${page.componentName}';`;
  if (!content.includes(importStatement)) {
    content = content.replace(/import Link from 'next\/link';\n(import Image from 'next\/image';\n)?/, `import Link from 'next/link';\n$1${importStatement}\n`);
  }

  // Replace sidebar
  const startTag = page.isNav ? '<nav className=' : '<aside className=';
  const endTag = page.isNav ? '</nav>' : '</aside>';
  
  // Find the exact block to replace. We need to match <nav ...> ... </nav> ensuring we find the matching closing tag
  const startIndex = content.indexOf(startTag);
  if (startIndex === -1) {
    console.log(`Could not find ${startTag} in ${page.path}`);
    continue;
  }
  
  // We just search for the first </nav> after startTag assuming there are no nested <nav> or <aside>
  const endTagIndex = content.indexOf(endTag, startIndex);
  if (endTagIndex === -1) {
    console.log(`Could not find ${endTag} in ${page.path}`);
    continue;
  }
  
  const endIndex = endTagIndex + endTag.length;

  const newSidebar = `<${page.componentName} activePath="${page.activePath}" />`;
  
  content = content.substring(0, startIndex) + newSidebar + content.substring(endIndex);
  
  // Also fix the main content lg:ml-64 to be ml-16 lg:ml-64
  content = content.replace(/lg:ml-64/g, 'ml-16 lg:ml-64');
  
  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${page.path}`);
}
