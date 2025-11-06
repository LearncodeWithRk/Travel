'use client';

import { useState } from 'react';
import { CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { WhatsAppButton } from './WhatsAppButton';
import { packages } from '@/lib/data';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [date, setDate] = useState<Date | undefined>();

  const getWhatsAppMessage = () => {
    let message = `Hello Tourigo! I'd like to book a trip.\n\n`;
    if (name) {
      message += `Name: ${name}\n`;
    }
    if (selectedPackage) {
      const pkg = packages.find(p => p.id === selectedPackage);
      message += `Package: ${pkg?.name}\n`;
    }
    if (date) {
      message += `Date: ${format(date, 'PPP')}\n`;
    }
    return message;
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Book Your Dream Trip</CardTitle>
        <CardDescription>
          Have questions or ready to book? Chat with our travel experts on WhatsApp!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="package">Select Tour Package</Label>
            <Select onValueChange={setSelectedPackage} value={selectedPackage}>
              <SelectTrigger id="package">
                <SelectValue placeholder="Choose a package" />
              </SelectTrigger>
              <SelectContent>
                {packages.map((pkg) => (
                  <SelectItem key={pkg.id} value={pkg.id}>
                    {pkg.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <WhatsAppButton
            phoneNumber="919599695872"
            message={getWhatsAppMessage()}
            className="w-full"
            size="lg"
            buttonText="Book via WhatsApp"
          />
        </form>
      </CardContent>
    </>
  );
}
