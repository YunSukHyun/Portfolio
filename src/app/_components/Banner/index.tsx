import React from 'react';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({ banner: { message, state } }: { banner: BannerData }) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';

  return (
    <p className={`banner ${isSuccess ? 'banner-success' : 'banner-error'}`}>
      {`${icon} ${message}`}
    </p>
  );
}
