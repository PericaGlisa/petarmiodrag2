// Form utility functions
export const handleFormSubmit = (data: Record<string, string>, type: 'whatsapp' | 'email') => {
  const formatMessage = (data: Record<string, string>) => {
    return Object.entries(data)
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');
  };

  if (type === 'whatsapp') {
    const message = encodeURIComponent(formatMessage(data));
    window.open(`https://wa.me/381607400727?text=${message}`, '_blank');
  } else if (type === 'email') {
    const subject = 'Newsletter Subscription';
    const body = encodeURIComponent(formatMessage(data));
    window.location.href = `mailto:petarglisovic@esamurai.net?subject=${subject}&body=${body}`;
  }
};