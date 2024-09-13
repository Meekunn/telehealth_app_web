interface ImportedMails {
  [key: string]: string;
}

export function importMails(): ImportedMails {
  const mails: ImportedMails = {};
  const mailFiles = import.meta.glob<string>('@/modules/course-content/components/mail/*.(html|htm)', { as: 'raw', eager: true });

  Object.entries(mailFiles).forEach(([path, content]) => {
    const fileName = path.split('/').pop()?.split('.')[0] || '';
    mails[fileName] = content;
  });

  return mails;
}

export const mails = importMails();