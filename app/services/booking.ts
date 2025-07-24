export interface BookingData {
  name: FormDataEntryValue | null;
  phone: string;
  car: FormDataEntryValue | null;
  service: FormDataEntryValue | null;
  date: FormDataEntryValue | null;
  time: FormDataEntryValue | null;
  comment: FormDataEntryValue | null;
}

export async function postBookingRequest(data: BookingData) {
  const response = await fetch('/api/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return { response, result };
} 