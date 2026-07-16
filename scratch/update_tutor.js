const fs = require('fs');

function updateFile(filePath, sidebarComponent, activePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not exists
    if (!content.includes(sidebarComponent)) {
        content = content.replace(/import Link from 'next\/link';/, `import Link from 'next/link';\nimport ${sidebarComponent} from '@/components/${sidebarComponent}';`);
    }

    // Replace nav
    const navStart = content.indexOf('<nav');
    const navEnd = content.indexOf('</nav>') + 6;
    
    if (navStart !== -1 && navEnd !== -1 && !content.substring(navStart, navEnd).includes(sidebarComponent)) {
        const navBlock = content.substring(navStart, navEnd);
        content = content.replace(navBlock, `<${sidebarComponent} activePath="${activePath}" />`);
    }

    // Replace main lg:ml-64 with ml-16 lg:ml-64
    content = content.replace(/<main className="([^"]*)lg:ml-64([^"]*)"/g, (match, p1, p2) => {
        if (!p1.includes('ml-16')) {
            return `<main className="${p1}ml-16 lg:ml-64${p2}"`;
        }
        return match;
    });

    fs.writeFileSync(filePath, content);
}

try {
    updateFile('/home/akonimayowa/projects/abu-yahya-school/src/app/tutor/scheduling/page.tsx', 'TutorSidebar', '/tutor/scheduling');
    updateFile('/home/akonimayowa/projects/abu-yahya-school/src/app/tutor/assignments/grade/page.tsx', 'TutorSidebar', '/tutor/assignments/grade');
    console.log("Success");
} catch (e) {
    console.error("Error:", e);
}
