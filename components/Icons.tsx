import React from 'react';

type IconProps = {
  activeCard: number;
};

export const ScanBoxIcon = ({ activeCard }: IconProps) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.83333 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V5.83333M2.5 14.1667V15.5C2.5 16.6046 3.39543 17.5 4.5 17.5H5.83333M14.1667 17.5H15.5C16.6046 17.5 17.5 16.6046 17.5 15.5V14.1667M17.5 5.83333V4.5C17.5 3.39543 16.6046 2.5 15.5 2.5H14.1667'
        stroke={`${activeCard === 1 ? '#4EE062' : '#818181'}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 7.5L10 5L15 7.5M5 7.5V12.5L10 15M5 7.5L10 10M10 10L15 7.5M10 10V15M15 7.5V12.5L10 15'
        stroke={`${activeCard === 1 ? '#4EE062' : '#818181'}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CoinsIcon = ({ activeCard }: IconProps) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.4999 11.6666V15C17.4999 15.8495 16.5112 16.6001 14.9999 17.0519C14.0551 17.3343 12.906 17.5 11.6666 17.5C10.4272 17.5 9.27811 17.3343 8.33325 17.0519C6.82202 16.6001 5.83325 15.8495 5.83325 15V14.1666M17.4999 11.6666C17.4999 12.5162 16.5112 13.2668 14.9999 13.7185C14.0551 14.001 12.906 14.1666 11.6666 14.1666C11.0874 14.1666 10.528 14.1305 9.99992 14.0631M17.4999 11.6666C17.4999 10.8612 16.6112 10.1447 15.231 9.6875'
        stroke={`${activeCard === 2 ? '#4EE062' : '#818181'}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 8.33332V11.6666C2.5 12.5162 3.48876 13.2668 5 13.7185C5.94486 14.001 7.09396 14.1666 8.33333 14.1666C9.57271 14.1666 10.7218 14.001 11.6667 13.7185C13.1779 13.2668 14.1667 12.5162 14.1667 11.6666V10.3852M2.5 8.33332C2.5 9.18287 3.48876 9.93345 5 10.3852C5.94486 10.6677 7.09396 10.8333 8.33333 10.8333C8.61627 10.8333 8.8945 10.8247 9.16667 10.808M2.5 8.33332C2.5 7.65214 3.13568 7.03459 4.16667 6.58368'
        stroke={`${activeCard === 2 ? '#4EE062' : '#818181'}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.8334 5C15.8334 3.61929 13.2217 2.5 10.0001 2.5C6.77842 2.5 4.16675 3.61929 4.16675 5M15.8334 5V8.33333C15.8334 9.18289 14.8447 9.93346 13.3334 10.3852C12.3886 10.6677 11.2395 10.8333 10.0001 10.8333C8.76071 10.8333 7.61161 10.6677 6.66675 10.3852C5.15551 9.93346 4.16675 9.18289 4.16675 8.33333V5M15.8334 5C15.8334 5.84955 14.8447 6.60013 13.3334 7.0519C12.3886 7.33435 11.2395 7.5 10.0001 7.5C8.76071 7.5 7.61161 7.33435 6.66675 7.0519C5.15551 6.60013 4.16675 5.84955 4.16675 5'
        stroke={`${activeCard === 2 ? '#4EE062' : '#818181'}`}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ContactlessPayIcon = ({ activeCard }: IconProps) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_25_2302)'>
        <path
          d='M19 21V11C19 9.89543 18.1046 9 17 9H7C5.89543 9 5 9.89543 5 11V21'
          stroke={`${activeCard === 3 ? '#4EE062' : '#818181'}`}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.0005 12.8339L11.9998 12.8332'
          stroke={`${activeCard === 3 ? '#4EE062' : '#818181'}`}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.10107 5C8.36361 3.76281 10.0928 3 12.0001 3C13.9074 3 15.6365 3.76281 16.899 5'
          stroke={`${activeCard === 3 ? '#4EE062' : '#818181'}`}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_25_2302'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EyeScanIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='9' fill='#D9D9D9' />
      <path
        d='M12 8C7.80383 8 5.66105 10.9334 5.13206 11.7761C5.04467 11.9153 5.04467 12.0847 5.13206 12.2239C5.66105 13.0666 7.80383 16 12 16C16.1962 16 18.3389 13.0666 18.8679 12.2239C18.9553 12.0847 18.9553 11.9153 18.8679 11.7761C18.3389 10.9334 16.1962 8 12 8Z'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='12' r='1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M7 3H5C3.89543 3 3 3.89543 3 5V7M3 17V19C3 20.1046 3.89543 21 5 21H7M17 21H19C20.1046 21 21 20.1046 21 19V17M21 7V5C21 3.89543 20.1046 3 19 3H17'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const NetworkIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='9' fill='#D9D9D9' />
      <circle cx='18' cy='4' r='2' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='5' cy='18' r='2' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='4.5' cy='5.5' r='1.5' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='19.5' cy='19.5' r='2.5' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M14.7431 9.81319C14.1357 9.30553 13.3535 9 12.5 9C11.3977 9 10.4144 9.50956 9.77289 10.306M14.7431 9.81319C15.5113 10.4552 16 11.4205 16 12.5C16 13.2436 15.7681 13.9331 15.3727 14.5M14.7431 9.81319L17 6M6 7L9.77289 10.306M9.77289 10.306C9.2894 10.9062 9 11.6693 9 12.5C9 13.4793 9.40223 14.3647 10.0505 15M6.5 16.5L10.0505 15M10.0505 15C10.6818 15.6186 11.5463 16 12.5 16C13.6894 16 14.7402 15.4067 15.3727 14.5M17.5 17.5L15.3727 14.5'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const PhoneSignalIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='9' fill='#D9D9D9' />
      <path
        d='M10 3H8C6.89543 3 6 3.89543 6 5L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V13M10 3L11 3V4M10 3V4M11 4V5C10.2 5 10 4.33333 10 4M11 4H10M10 18H14'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M15 9.00098L15 8.99998' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M18 9C18 7.34315 16.6569 6 15 6'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 9C21 5.68629 18.3137 3 15 3'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const NavigationIcon = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_27_2597)'>
        <circle cx='12' cy='12' r='9' fill='#D9D9D9' />
        <path
          d='M5.54997 8.10268L17.2763 4.19389C18.8399 3.67272 20.3273 5.1602 19.8062 6.72372L15.8974 18.4501C15.2896 20.2735 12.7104 20.2735 12.1026 18.4501L10.7807 14.4843C10.5816 13.8871 10.113 13.4184 9.51578 13.2194L5.54996 11.8974C3.72657 11.2896 3.72658 8.71047 5.54997 8.10268Z'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_27_2597'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const NvidiaLogo = () => {
  return (
    <svg width='169' height='33' viewBox='0 0 169 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_25_2059)'>
        <path
          d='M18.8416 9.56211V6.67095C19.1217 6.6511 19.4051 6.63567 19.694 6.62685C27.6 6.37875 32.7857 13.4203 32.7857 13.4203C32.7857 13.4203 27.1843 21.2006 21.1781 21.2006C20.3136 21.2006 19.5385 21.0605 18.8416 20.8268V12.0618C21.9191 12.4334 22.5377 13.793 24.3879 16.8771L28.503 13.407C28.503 13.407 25.4994 9.46728 20.436 9.46728C19.8847 9.46728 19.3577 9.50587 18.8416 9.56211ZM18.8416 0.0131531V4.33114C19.125 4.30798 19.4095 4.29034 19.694 4.28042C30.6885 3.90992 37.8502 13.2957 37.8502 13.2957C37.8502 13.2957 29.6233 23.3 21.0524 23.3C20.2673 23.3 19.5319 23.2272 18.8416 23.1049V25.7744C19.4315 25.8493 20.0446 25.8934 20.683 25.8934C28.6585 25.8934 34.4265 21.8203 40.0125 16.9995C40.9376 17.7416 44.7285 19.5444 45.5092 20.335C40.1977 24.7809 27.8216 28.3645 20.8054 28.3645C20.1295 28.3645 19.4789 28.3237 18.8416 28.2619V32.0132H49.1557V0.0131531H18.8416ZM18.8416 20.8268V23.1049C11.4638 21.7905 9.41617 14.1216 9.41617 14.1216C9.41617 14.1216 12.959 10.1972 18.8416 9.56211V12.0618C18.8361 12.0618 18.8339 12.0607 18.8295 12.0607C15.7432 11.6902 13.3306 14.5736 13.3306 14.5736C13.3306 14.5736 14.6824 19.4297 18.8416 20.8268ZM5.73883 13.7897C5.73883 13.7897 10.1108 7.33806 18.8416 6.67095V4.33114C9.17137 5.1063 0.797852 13.2957 0.797852 13.2957C0.797852 13.2957 5.54035 27.0071 18.8416 28.2619V25.7744C9.08095 24.546 5.73883 13.7897 5.73883 13.7897Z'
          fill='#323232'
        />
        <path
          d='M166.076 24.5127V24.0503H166.373C166.54 24.0503 166.763 24.0633 166.763 24.2602C166.763 24.4737 166.633 24.5127 166.447 24.5127H166.076ZM166.076 24.8376H166.28L166.725 25.6453H167.227L166.725 24.8042C166.985 24.7856 167.208 24.6594 167.208 24.3047C167.208 23.8647 166.911 23.7235 166.391 23.7235H165.649V25.6453H166.076V24.8376ZM168.229 24.6872C168.229 23.5583 167.357 22.9028 166.373 22.9028C165.389 22.9028 164.516 23.5583 164.516 24.6872C164.516 25.8162 165.389 26.4735 166.373 26.4735C167.357 26.4735 168.229 25.8162 168.229 24.6872ZM167.71 24.6872C167.71 25.5098 167.097 26.0613 166.373 26.0613V26.0557C165.649 26.0613 165.054 25.5098 165.054 24.6872C165.054 23.8647 165.649 23.315 166.373 23.315C167.097 23.315 167.71 23.8647 167.71 24.6872Z'
          fill='#323232'
        />
        <path
          d='M100.17 5.58071L100.172 25.8422H105.895V5.58071H100.17ZM55.1558 5.55286V25.8422H60.9286V10.4363L65.4016 10.4381C66.8833 10.4381 67.938 10.8076 68.6529 11.5689C69.5571 12.5326 69.9266 14.0886 69.9266 16.9332V25.8422H75.5193V14.6326C75.5193 6.63165 70.4205 5.55286 65.4313 5.55286H55.1558ZM109.384 5.58256V25.8422H118.664C123.609 25.8422 125.222 25.0196 126.97 23.1758C128.202 21.8816 128.999 19.0407 128.999 15.9342C128.999 13.0878 128.325 10.5458 127.148 8.96379C125.027 6.13404 121.973 5.58256 117.414 5.58256H109.384ZM115.06 9.99247H117.52C121.089 9.99247 123.397 11.5967 123.397 15.7541C123.397 19.9152 121.089 21.5177 117.52 21.5177H115.06V9.99247ZM91.9205 5.58256L87.1448 21.6383L82.5678 5.58256H76.392L82.9261 25.8422H91.174L97.7601 5.58256H91.9205ZM131.662 25.8422H137.384V5.58256H131.662V25.8422ZM147.703 5.58813L139.713 25.8347H145.356L146.62 22.2567H156.067L157.274 25.8347H163.402L155.343 5.58813H147.703ZM151.418 9.28318L154.879 18.7677H147.842L151.418 9.28318Z'
          fill='#323232'
        />
      </g>
      <defs>
        <clipPath id='clip0_25_2059'>
          <rect width='167.432' height='32' fill='white' transform='translate(0.797852 0.0131531)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TensorflowLogo = () => {
  return (
    <svg width='145' height='34' viewBox='0 0 145 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.9893 18.3166L18.5751 15.6555L23.0932 18.3166L18.5751 20.9213L13.9893 18.3731V18.3166ZM0.229492 10.4461L18.5842 0.0263062L32.2288 7.78384L27.7107 15.6543L18.5955 10.445L4.83793 18.259L0.229492 10.4461Z'
        fill='#D9D9D9'
      />
      <path
        d='M13.9893 28.7342V23.5248L18.5074 20.9202L23.0933 18.3155V23.5248L18.5752 26.1295V31.3388L13.9893 34V28.7342ZM13.9893 18.3166L9.40348 15.7119L4.81763 18.2601V13.0497L18.5752 5.23566V15.6543L13.9893 18.3166ZM27.6339 13.0508V10.4461L32.2198 7.78498L32.2762 12.9943L27.6904 15.6555L27.6339 13.0508Z'
        fill='#818181'
      />
      <path
        d='M9.40119 31.2259V15.7119L13.9193 13.1638L13.9757 18.3166L18.5616 20.8648V26.1306L13.9757 23.6954V34L9.40119 31.2259ZM2.49531 16.9013L0.229492 15.5425V10.4484L4.81534 13.0531V18.2624L2.49531 16.9013ZM18.5751 10.4461V5.23679L27.6339 10.4461L27.6904 15.6555L18.5751 10.4461Z'
        fill='#323232'
      />
      <path
        d='M45.7354 11.2694V25.69H43.2009V11.2694H38.2761V8.78247H50.6561V11.268L45.7354 11.2694ZM59.0473 16.507C59.2024 17.1342 59.2715 17.7795 59.2527 18.4253L51.0751 20.8496C51.1391 21.4618 51.1214 21.2128 51.3132 21.6481C51.505 22.0835 51.7485 22.4399 52.037 22.7365C52.3254 23.0331 52.6492 23.2262 52.9893 23.3623C53.3294 23.4983 53.7198 23.5691 54.0994 23.5664C54.6436 23.5664 55.117 23.4779 55.5591 23.3011C56.0219 23.1123 56.4563 22.8605 56.8502 22.5528L58.3222 24.1445C57.7778 24.67 57.139 25.0877 56.4393 25.3757C55.7455 25.6655 54.9184 25.8111 53.9538 25.8111C53.2276 25.814 52.5086 25.6662 51.8424 25.3771C51.1622 25.0873 50.5908 24.6615 50.0929 24.0983C49.595 23.5351 49.2004 22.844 48.9093 22.0223C48.6182 21.2006 48.474 20.2537 48.474 19.2225C48.474 18.145 48.61 17.1818 48.8848 16.3751C49.1596 15.5683 49.5378 14.8786 50.0194 14.3113C50.4972 13.7599 51.096 13.3265 51.7689 13.0447C52.4842 12.7491 53.252 12.6014 54.0259 12.6107C54.9265 12.6107 55.7129 12.7794 56.3795 13.1182C57.0461 13.4569 57.6039 13.9154 58.0447 14.4786C58.5031 15.0885 58.839 15.7815 59.0337 16.5193L59.0473 16.507ZM56.6706 17.0784C56.638 16.6431 56.3387 16.1261 56.0911 15.7819C55.8577 15.4745 55.5449 15.2365 55.1864 15.0935C54.8163 14.9466 54.313 14.8854 53.8708 14.9031C53.0546 14.9398 52.1023 15.2269 51.6506 15.8554C51.1989 16.4839 51.0561 17.5736 51.0738 18.7354L56.6706 17.0784ZM68.2303 25.5322V18.3627C68.2303 17.0757 67.999 16.186 67.5419 15.6595C67.0848 15.133 66.444 14.8868 65.6373 14.8868C64.8006 14.8868 64.1571 15.1684 63.7054 15.7302C63.2538 16.2921 63.0293 17.0907 63.0293 18.1192V25.5281H60.5302V12.8624H63.0157V14.0691C63.3381 13.6025 63.7843 13.2529 64.3557 12.9835C64.9271 12.7141 65.542 12.5971 66.2018 12.5971C67.682 12.5971 68.8044 13.0733 69.5689 14.0215C70.3335 14.9697 70.7158 16.3887 70.7158 18.2688V25.5335L68.2303 25.5322ZM80.9259 22.2018C80.9259 22.9093 80.7925 23.5011 80.5273 23.9758C80.2747 24.4371 79.9143 24.8306 79.477 25.1227C79.0417 25.4125 78.5247 25.622 77.9805 25.7485C77.39 25.8793 76.7868 25.9441 76.182 25.9417C75.3113 25.9417 74.4488 25.7893 73.5877 25.4832C72.7838 25.2068 72.0237 24.8165 71.3307 24.3241L72.4517 22.4549C73.0172 22.8581 73.6393 23.1754 74.2978 23.3963C74.9331 23.6058 75.5494 23.7092 76.1439 23.7092C77.688 23.7092 78.4607 23.2426 78.4607 22.3079C78.4607 21.825 78.1996 21.4373 77.6771 21.1516C77.1547 20.8659 76.4337 20.5394 75.5168 20.1993C74.9235 19.9802 74.347 19.7183 73.7917 19.4157C73.3183 19.149 72.9306 18.8647 72.6326 18.5586C72.3453 18.2689 72.1268 17.9183 71.9932 17.5328C71.864 17.1546 71.8 16.7165 71.8 16.2173C71.8 15.654 71.9048 15.1561 72.1129 14.7208C72.3178 14.2918 72.6241 13.9191 73.0054 13.6352C73.3918 13.3454 73.8489 13.1277 74.3658 12.9821C74.8828 12.8366 75.476 12.7645 76.1031 12.7645C76.9194 12.7645 77.6839 12.8937 78.4322 13.1508C79.1804 13.408 79.8362 13.7467 80.3994 14.1644L79.3314 16.0608C78.8172 15.6908 78.2934 15.4173 77.7628 15.2405C77.2323 15.0636 76.6745 14.9752 76.0487 14.9752C75.4229 14.9752 74.9944 15.084 74.7209 15.3017C74.5915 15.3981 74.4867 15.5238 74.4153 15.6685C74.3439 15.8133 74.3078 15.9729 74.3101 16.1343C74.3086 16.2884 74.3416 16.4408 74.4066 16.5805C74.4706 16.7165 74.5917 16.858 74.7685 16.9886C74.9897 17.1614 75.2281 17.311 75.48 17.4349C75.862 17.6252 76.2524 17.7982 76.65 17.9532L78.5084 18.7382C78.9916 18.9571 79.4425 19.2414 79.8484 19.583C80.199 19.8816 80.4756 20.2574 80.6565 20.6809C80.8334 21.0985 80.9218 21.606 80.9218 22.2018H80.9259ZM92.4869 19.281C92.4869 20.3285 92.3427 21.2645 92.0515 22.093C91.7604 22.9215 91.3713 23.6221 90.8448 24.1922C90.344 24.7534 89.7264 25.1982 89.0354 25.4955C88.3552 25.7948 87.5879 25.9417 86.7662 25.9417C85.95 25.9417 85.2221 25.7852 84.546 25.471C83.8695 25.1556 83.2687 24.6986 82.7842 24.1309C82.2849 23.5527 81.8959 22.8603 81.6142 22.0549C81.3326 21.2495 81.2061 20.3489 81.2061 19.3517C81.2061 18.3219 81.3503 17.3968 81.6415 16.5764C81.9326 15.7561 82.3298 15.0595 82.8359 14.4881C83.3249 13.9239 83.9357 13.4783 84.6222 13.1848C85.3201 12.8883 86.0506 12.7386 86.8533 12.7386C87.6267 12.7322 88.3924 12.8927 89.098 13.2093C89.7826 13.5177 90.3953 13.9658 90.8965 14.5249C91.404 15.0881 91.7971 15.7765 92.0801 16.5887C92.3631 17.4008 92.4882 18.2987 92.4882 19.2796L92.4869 19.281ZM89.9769 19.3531C89.9769 18.0498 89.7048 17.0158 89.1198 16.2513C88.5348 15.4867 87.7566 15.1044 86.7431 15.1044C86.3042 15.0892 85.8688 15.1865 85.4782 15.3873C85.0876 15.5881 84.755 15.8855 84.512 16.2513C83.9746 17.0172 83.7039 18.0253 83.7039 19.281C83.7039 20.6822 83.9937 21.7461 84.5746 22.478C84.8416 22.8304 85.1889 23.1138 85.5877 23.3048C85.9864 23.4957 86.425 23.5887 86.8669 23.5759C87.3335 23.5759 87.7593 23.463 88.1457 23.2385C88.5354 23.0099 88.8724 22.7016 89.1348 22.3338C89.4214 21.9277 89.6337 21.474 89.7619 20.9938C89.9061 20.4795 89.9796 19.9326 89.9796 19.3531H89.9769ZM100.5 15.6364C100.231 15.4937 99.948 15.3805 99.655 15.299C99.3652 15.2173 99.0115 15.1629 98.5939 15.1629C97.8048 15.1629 97.1926 15.435 96.76 15.9833C96.3274 16.5315 96.107 17.3437 96.107 18.4212V25.6614H93.6215V12.9903H96.107V14.197C96.4184 13.7591 96.8273 13.3996 97.3015 13.1468C97.8228 12.8616 98.4092 12.7163 99.0034 12.725C99.5176 12.725 99.9557 12.7699 100.269 12.8583C100.582 12.9405 100.88 13.0753 101.149 13.257L100.496 15.6241L100.5 15.6364Z'
        fill='#323232'
      />
      <path
        d='M104.673 11.2694V15.6867H109.525V18.1722H104.673V25.6778H102.139V8.78249H113.022V11.268L104.673 11.2694ZM113.435 25.6764V9.38652L115.92 8.08322V25.6791L113.435 25.6764ZM128.617 19.2823C128.617 20.3299 128.472 21.2659 128.182 22.0944C127.892 22.9229 127.488 23.6235 126.975 24.1935C126.474 24.7549 125.856 25.1998 125.164 25.4968C124.471 25.7961 123.717 25.9431 122.895 25.9431C122.092 25.9431 121.351 25.7866 120.675 25.4723C119.999 25.1581 119.412 24.7105 118.913 24.1323C118.414 23.5541 118.025 22.8617 117.743 22.0563C117.462 21.2509 117.335 20.3503 117.335 19.3531C117.335 18.3232 117.479 17.3981 117.77 16.5778C118.061 15.7575 118.459 15.0609 118.965 14.4895C119.471 13.9181 120.053 13.4828 120.751 13.1862C121.449 12.8896 122.18 12.74 122.982 12.74C123.785 12.74 124.533 12.8965 125.227 13.2107C125.912 13.5191 126.524 13.9672 127.025 14.5263C127.533 15.0895 127.926 15.7779 128.209 16.59C128.492 17.4022 128.617 18.3015 128.617 19.2823ZM126.107 19.3545C126.107 18.0512 125.835 17.0172 125.25 16.2527C124.665 15.4881 123.887 15.1058 122.873 15.1058C121.924 15.1058 121.18 15.4867 120.642 16.2527C120.105 17.0186 119.834 18.0267 119.834 19.2823C119.834 20.6836 120.124 21.7475 120.705 22.4794C120.972 22.8317 121.319 23.1152 121.718 23.3062C122.117 23.4971 122.555 23.5901 122.997 23.5773C123.446 23.5821 123.888 23.4656 124.276 23.2399C124.666 23.0112 125.003 22.703 125.265 22.3352C125.537 21.957 125.748 21.5107 125.891 20.9951C126.034 20.4795 126.107 19.934 126.107 19.3545ZM140.877 25.6778H138.755L137.041 19.2837L136.667 17.8008L136.389 16.5819L136.112 17.8131L135.738 19.3096L134.048 25.6819H131.926L128.45 13.0107H130.899L132.395 19.1654L132.757 20.6863L133.022 21.942L133.335 20.6863L133.721 19.1654L135.411 13.0107H137.415L139.129 19.1898L139.503 20.6999L139.805 21.9434L140.083 20.6782L140.433 19.1681L141.929 13.0134H144.378L140.877 25.6778Z'
        fill='#323232'
      />
    </svg>
  );
};

export const PythonLogo = () => {
  return (
    <svg width='110' height='32' viewBox='0 0 110 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_25_2072)'>
        <path
          d='M13.1236 0.386366C12.0597 0.391239 11.0439 0.481984 10.1501 0.640264C7.51692 1.10559 7.03883 2.07917 7.03883 3.87502V6.24667H13.2614V7.03714H4.70338C2.895 7.03714 1.31127 8.12422 0.816007 10.1921C0.244621 12.5623 0.219324 14.0414 0.816007 16.5163C1.25836 18.3586 2.31479 19.6712 4.12318 19.6712H6.26274V16.8282C6.26274 14.7743 8.0398 12.9627 10.1501 12.9627H16.3655C18.0957 12.9627 19.4768 11.5381 19.4768 9.80055V3.87479C19.4768 2.18848 18.0541 0.921547 16.3655 0.640032C15.2963 0.462257 14.1874 0.38126 13.1236 0.386366ZM9.75836 2.29362C10.4012 2.29362 10.926 2.82717 10.926 3.48304C10.926 4.13658 10.401 4.66526 9.75836 4.66526C9.11341 4.66526 8.59076 4.13681 8.59076 3.48304C8.59076 2.82717 9.11341 2.29362 9.75836 2.29362Z'
          fill='#323232'
        />
        <path
          d='M20.2529 7.03693V9.8001C20.2529 11.9424 18.4366 13.7455 16.3655 13.7455H10.1501C8.44756 13.7455 7.03882 15.2025 7.03882 16.9076V22.8329C7.03882 24.5194 8.50511 25.5114 10.1501 25.995C12.1198 26.5743 14.0087 26.679 16.3655 25.995C17.9321 25.5415 19.4768 24.6285 19.4768 22.8329V20.4615H13.2614V19.671H22.5881C24.3967 19.671 25.0704 18.4094 25.6994 16.5161C26.3492 14.5671 26.3216 12.6923 25.6994 10.1919C25.2524 8.39159 24.3988 7.03693 22.5881 7.03693H20.2529ZM16.757 22.0424C17.402 22.0424 17.9246 22.5709 17.9246 23.2247C17.9246 23.8805 17.402 24.4141 16.757 24.4141C16.1142 24.4141 15.5894 23.8805 15.5894 23.2247C15.5894 22.5711 16.1144 22.0424 16.757 22.0424Z'
          fill='#323232'
        />
        <path
          opacity='0.444'
          d='M21.671 30.0233C21.671 30.9163 17.9375 31.6402 13.3319 31.6402C8.72643 31.6402 4.99292 30.9163 4.99292 30.0233C4.99292 29.1302 8.72643 28.4061 13.3319 28.4061C17.9375 28.4061 21.671 29.1302 21.671 30.0233Z'
          fill='url(#paint0_radial_25_2072)'
        />
        <path
          d='M40.5579 14.0017C40.5579 10.6221 39.5943 8.88707 37.6669 8.79215C36.8998 8.75595 36.1514 8.87802 35.4229 9.16093C34.8415 9.36888 34.4502 9.57497 34.2444 9.78314V17.8499C35.4772 18.6236 36.5719 18.9833 37.5267 18.9267C39.5465 18.7928 40.5579 17.1529 40.5579 14.0017ZM42.9354 14.1419C42.9354 15.8588 42.5327 17.284 41.7227 18.4173C40.8202 19.7 39.5693 20.3605 37.97 20.3967C36.7643 20.435 35.5222 20.0574 34.2441 19.2656V26.5973L32.1765 25.8597V9.58611C32.5158 9.16998 32.9526 8.81258 33.4817 8.50924C34.7125 7.79211 36.2075 7.42356 37.9677 7.40546L37.9969 7.4347C39.6055 7.41451 40.8448 8.07502 41.7158 9.41413C42.5281 10.6425 42.9354 12.217 42.9354 14.1419ZM55.5716 18.9536C55.5716 21.2566 55.3409 22.8512 54.8795 23.738C54.4158 24.6246 53.5334 25.3326 52.2305 25.8599C51.1741 26.2761 50.0315 26.5023 48.8057 26.5409L48.4638 25.238C49.7103 25.0685 50.5881 24.8987 51.097 24.729C52.0991 24.3897 52.7868 23.8696 53.1646 23.1727C53.4677 22.605 53.617 21.5214 53.617 19.9177V19.3793C52.2031 20.0219 50.7215 20.3408 49.1721 20.3408C48.154 20.3408 47.2561 20.0219 46.4823 19.3793C45.6136 18.6802 45.1794 17.7937 45.1794 16.7192V8.11354L47.247 7.40546V16.067C47.247 16.9921 47.5455 17.7048 48.1426 18.2047C48.7398 18.7046 49.5135 18.9446 50.4613 18.9263C51.4092 18.9058 52.4248 18.5394 53.5037 17.8222V7.71738H55.5713L55.5716 18.9536ZM63.6427 20.2837C63.4162 20.3028 63.189 20.3126 62.9618 20.3129C61.7923 20.3129 60.8804 20.0349 60.2292 19.4761C59.5798 18.9174 59.2542 18.1462 59.2542 17.162V9.0182H57.8381V7.71761H59.2542V4.2633L61.3195 3.52807V7.71761H63.6427V9.0182H61.3195V17.1053C61.3195 17.8814 61.5275 18.431 61.9436 18.7524C62.301 19.017 62.8689 19.1685 63.6424 19.2071V20.2837H63.6427ZM76.1614 20.114H74.0938V12.1332C74.0938 11.3212 73.904 10.6221 73.5261 10.0387C73.0896 9.37793 72.4834 9.04768 71.705 9.04768C70.7572 9.04768 69.5719 9.54758 68.149 10.5474V20.114H66.0816V1.03759L68.149 0.386139V9.07483C69.47 8.11331 70.9134 7.63151 72.4811 7.63151C73.576 7.63151 74.4626 8.00029 75.1414 8.73553C75.8223 9.47053 76.1617 10.3868 76.1617 11.4818L76.1614 20.114ZM87.1507 13.6761C87.1507 12.3776 86.9043 11.3054 86.4132 10.4571C85.8295 9.42342 84.9225 8.87802 83.6964 8.82163C81.4297 8.95275 80.2985 10.5769 80.2985 13.6898C80.2985 15.1171 80.5339 16.3093 81.0089 17.2662C81.6151 18.4855 82.5247 19.0873 83.7373 19.0669C86.0128 19.0486 87.1507 17.2525 87.1507 13.6761ZM89.4152 13.6896C89.4152 15.5379 88.9424 17.0761 87.999 18.3043C86.9604 19.6798 85.5266 20.3696 83.6964 20.3696C81.8822 20.3696 80.4684 19.6796 79.4482 18.3043C78.5229 17.0761 78.0613 15.5379 78.0613 13.6896C78.0613 11.9524 78.5612 10.491 79.5612 9.30111C80.6176 8.03881 82.0064 7.40546 83.7236 7.40546C85.4403 7.40546 86.8384 8.03881 87.9152 9.30111C88.9153 10.491 89.4152 11.9524 89.4152 13.6896ZM101.269 20.114H99.2009V11.6809C99.2009 10.7558 98.9229 10.034 98.3664 9.5137C97.8098 8.99569 97.0676 8.74458 96.1425 8.76477C95.1611 8.78287 94.2265 9.10407 93.3399 9.72628V20.114H91.2723V9.47076C92.4622 8.60463 93.5571 8.03882 94.557 7.77424C95.5001 7.52777 96.3326 7.40546 97.0498 7.40546C97.5404 7.40546 98.0022 7.45281 98.4364 7.54796C99.2485 7.73571 99.9092 8.08407 100.418 8.59535C100.986 9.16093 101.269 9.83931 101.269 10.6335V20.114Z'
          fill='#323232'
        />
        <path
          d='M105.295 5.8742H105.657V3.60072H106.516V3.32965H104.436V3.60072H105.294L105.295 5.8742ZM106.837 5.8742H107.147V3.79776L107.819 5.87397H108.164L108.864 3.80472V5.8742H109.202V3.32988H108.755L107.99 5.50983L107.337 3.32988H106.837V5.8742Z'
          fill='#323232'
        />
      </g>
      <defs>
        <radialGradient
          id='paint0_radial_25_2072'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(13.3292 29.9861) rotate(-90) scale(1.61668 7.10759)'>
          <stop stopColor='#B8B8B8' stopOpacity='0.498' />
          <stop offset='1' stopColor='#7F7F7F' stopOpacity='0' />
        </radialGradient>
        <clipPath id='clip0_25_2072'>
          <rect width='108.824' height='31.254' fill='white' transform='translate(0.37793 0.386139)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Spinner = () => {
  return (
    <svg
      className='animate-spin-slower'
      width='370'
      height='370'
      viewBox='0 0 370 370'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_25_2271)'>
        <path
          opacity='0.2'
          d='M185 0.663086C286.806 0.663086 369.337 83.1936 369.337 185C369.337 286.806 286.806 369.337 185 369.337C83.1934 369.337 0.662844 286.806 0.662844 185C0.662844 83.1936 83.1934 0.663086 185 0.663086Z'
          stroke='#4EE062'
        />
        <path
          d='M185 0.663086C286.806 0.663086 369.337 83.1936 369.337 185'
          stroke='url(#paint0_linear_25_2271)'
          strokeLinecap='round'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_25_2271'
          x1='359.39'
          y1='52.3835'
          x2='212.849'
          y2='69.6237'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#4EE062' />
          <stop offset='1' stopColor='#4EE062' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_25_2271'>
          <rect width='370' height='370' fill='white' transform='matrix(0 1 -1 0 370 0)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LinkedInLogo = () => {
  return (
    <svg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.55906 2.17391C4.55906 3.37478 3.59077 4.34783 2.39567 4.34783C1.20058 4.34783 0.23229 3.37478 0.23229 2.17391C0.23229 0.973913 1.20058 0 2.39567 0C3.59077 0 4.55906 0.973913 4.55906 2.17391ZM4.5765 6.08696H0.214844V20H4.5765V6.08696ZM11.5395 6.08696H7.20571V20H11.5403V12.6965C11.5403 8.63565 16.7996 8.30348 16.7996 12.6965V20H21.1508V11.1904C21.1508 4.33826 13.3679 4.58783 11.5395 7.96087V6.08696Z'
        fill='black'
      />
    </svg>
  );
};

export const DiscordLogo = () => {
  return (
    <svg width='27' height='20' viewBox='0 0 27 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M22.3634 1.65789C20.691 0.890525 18.8976 0.325164 17.0225 0.00135832C16.9884 -0.00489103 16.9543 0.0107264 16.9367 0.0419621C16.706 0.452184 16.4506 0.987351 16.2717 1.40799C14.2549 1.10606 12.2484 1.10606 10.273 1.40799C10.094 0.978001 9.82928 0.452184 9.5976 0.0419621C9.58001 0.0117686 9.5459 -0.00384885 9.51175 0.00135832C7.63768 0.324129 5.84429 0.88949 4.17086 1.65789C4.15638 1.66414 4.14396 1.67456 4.13572 1.68808C0.734035 6.77013 -0.197829 11.7273 0.259312 16.6229C0.261381 16.6469 0.274826 16.6698 0.293443 16.6843C2.53778 18.3325 4.7118 19.3331 6.84544 19.9964C6.87959 20.0068 6.91577 19.9943 6.9375 19.9662C7.44222 19.2769 7.89213 18.5502 8.27788 17.7859C8.30064 17.7412 8.27891 17.688 8.23239 17.6703C7.51876 17.3996 6.83924 17.0696 6.18559 16.6948C6.13388 16.6646 6.12974 16.5906 6.17731 16.5552C6.31486 16.4521 6.45245 16.3449 6.58379 16.2366C6.60756 16.2168 6.64067 16.2127 6.66861 16.2252C10.9628 18.1857 15.6118 18.1857 19.8553 16.2252C19.8833 16.2116 19.9164 16.2158 19.9412 16.2356C20.0726 16.3439 20.2101 16.4521 20.3487 16.5552C20.3963 16.5906 20.3932 16.6646 20.3415 16.6948C19.6878 17.0769 19.0083 17.3996 18.2936 17.6693C18.2471 17.687 18.2264 17.7412 18.2492 17.7859C18.6432 18.5491 19.0931 19.2759 19.5885 19.9651C19.6092 19.9943 19.6464 20.0068 19.6806 19.9964C21.8246 19.3331 23.9986 18.3325 26.2429 16.6843C26.2626 16.6698 26.275 16.6479 26.277 16.624C26.8241 10.964 25.3607 6.04755 22.3975 1.68912C22.3903 1.67456 22.3779 1.66414 22.3634 1.65789ZM8.91915 13.642C7.6263 13.642 6.56103 12.455 6.56103 10.9974C6.56103 9.53969 7.60564 8.35275 8.91915 8.35275C10.243 8.35275 11.2979 9.55011 11.2772 10.9974C11.2772 12.455 10.2326 13.642 8.91915 13.642ZM17.6379 13.642C16.3451 13.642 15.2798 12.455 15.2798 10.9974C15.2798 9.53969 16.3244 8.35275 17.6379 8.35275C18.9618 8.35275 20.0167 9.55011 19.996 10.9974C19.996 12.455 18.9618 13.642 17.6379 13.642Z'
        fill='black'
      />
    </svg>
  );
};

export const TwitterLogo = () => {
  return (
    <svg width='25' height='20' viewBox='0 0 25 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M24.9999 2.36756C24.0944 2.76913 23.1213 3.04054 22.1 3.1626C23.1425 2.5377 23.943 1.54822 24.32 0.369253C23.3445 0.947799 22.2639 1.368 21.1138 1.59449C20.1928 0.613202 18.8806 0 17.4284 0C14.6399 0 12.3792 2.26062 12.3792 5.04892C12.3792 5.44464 12.4239 5.83001 12.51 6.19953C8.31372 5.98898 4.59337 3.97888 2.10311 0.924214C1.66851 1.66992 1.41952 2.53725 1.41952 3.46254C1.41952 5.2142 2.31096 6.75963 3.66573 7.66503C2.83802 7.63883 2.05954 7.41172 1.37874 7.03355C1.37838 7.05461 1.37838 7.07577 1.37838 7.09701C1.37838 9.54334 3.11879 11.584 5.42856 12.0478C5.00484 12.1632 4.5588 12.2249 4.09827 12.2249C3.77295 12.2249 3.45662 12.1933 3.1484 12.1343C3.79086 14.1403 5.65549 15.6 7.86489 15.6408C6.13691 16.9949 3.95982 17.8021 1.59433 17.8021C1.18682 17.8021 0.784891 17.7783 0.389893 17.7316C2.62432 19.1642 5.27832 20 8.12963 20C17.4166 20 22.4951 12.3064 22.4951 5.6344C22.4951 5.41548 22.4902 5.19772 22.4805 4.98123C23.4669 4.26937 24.323 3.38008 24.9999 2.36756Z'
        fill='black'
      />
    </svg>
  );
};
