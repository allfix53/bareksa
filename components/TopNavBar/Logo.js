import { Box, Hide, Show } from '@chakra-ui/react'

export default function Logo() {
  return (
    <>
      <Box w={120}>
        <svg
          width="120"
          height="32"
          viewBox="0 0 120 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.3235 16.6548C46.1711 17.127 46.8686 17.8284 47.3362 18.6786C47.8229 19.5465 48.0662 20.5585 48.0662 21.7148C48.0662 22.871 47.8229 23.8827 47.3362 24.7499C46.8686 25.6001 46.1711 26.3015 45.3235 26.7737C44.4529 27.2572 43.4713 27.5054 42.4755 27.4937C40.9287 27.4937 39.7548 27.0077 38.9537 26.0357V27.3295H35.8494V11.8462H39.1039V17.2917C39.925 16.3871 41.0519 15.9348 42.4845 15.9348C43.4773 15.9247 44.4556 16.1728 45.3235 16.6548V16.6548ZM43.9666 23.9779C44.5007 23.4151 44.7677 22.6607 44.7677 21.7148C44.7677 20.7688 44.5007 20.0141 43.9666 19.4507C43.4325 18.8879 42.7476 18.6062 41.9118 18.6055C41.0759 18.6048 40.3903 18.8865 39.8549 19.4507C39.3209 20.0141 39.0538 20.7688 39.0538 21.7148C39.0538 22.6607 39.3209 23.4151 39.8549 23.9779C40.389 24.542 41.0739 24.8237 41.9098 24.823C42.7456 24.8224 43.4312 24.5407 43.9666 23.9779Z"
            fill="#323232"
          />
          <path
            d="M58.5805 17.1765C59.5118 18.005 59.9791 19.2534 59.9824 20.9217V27.3305H56.9332V25.9286C56.3217 26.972 55.1811 27.4937 53.5115 27.4937C52.649 27.4937 51.9013 27.3475 51.2684 27.0551C50.6788 26.7997 50.1754 26.3797 49.8184 25.8454C49.4826 25.3234 49.3084 24.7137 49.3177 24.093C49.3177 23.0496 49.7106 22.2288 50.4964 21.6306C51.2821 21.0325 52.4958 20.7321 54.1374 20.7294H56.7249C56.7249 20.0204 56.5093 19.4747 56.078 19.0922C55.6468 18.7096 54.9999 18.5207 54.1374 18.5254C53.5387 18.5256 52.9439 18.6206 52.3749 18.8068C51.8429 18.9707 51.3447 19.2288 50.9039 19.5688L49.7353 17.2947C50.4063 16.8362 51.1517 16.4974 51.9383 16.2933C52.797 16.0553 53.6839 15.9347 54.575 15.9348C56.314 15.9348 57.6492 16.3487 58.5805 17.1765ZM55.8057 24.9172C56.2371 24.659 56.5626 24.2558 56.7239 23.7796V22.631H54.4909C53.1557 22.631 52.4881 23.0693 52.4881 23.9458C52.4817 24.1387 52.5232 24.3302 52.6088 24.5032C52.6944 24.6762 52.8215 24.8253 52.9788 24.9372C53.3052 25.1809 53.7538 25.3024 54.3246 25.3017C54.8446 25.3118 55.3573 25.1788 55.8067 24.9172H55.8057Z"
            fill="#323232"
          />
          <path
            d="M67.605 16.3525C68.3308 16.0618 69.1075 15.9198 69.8892 15.9349V18.9391C69.528 18.911 69.2847 18.897 69.1592 18.897C68.2246 18.897 67.4942 19.1577 66.9682 19.6791C66.4421 20.2005 66.1777 20.9842 66.1751 22.0303V27.3296H62.9206V16.1022H66.0249V17.5832C66.4253 17.0325 66.973 16.6059 67.605 16.3525Z"
            fill="#323232"
          />
          <path
            d="M82.6576 22.6311H74.1659C74.3011 23.3002 74.6901 23.8909 75.2514 24.2794C75.8208 24.6799 76.5302 24.8802 77.3793 24.8802C77.909 24.8899 78.4359 24.8016 78.9335 24.6198C79.4057 24.4332 79.8352 24.1528 80.1962 23.7957L81.9276 25.6733C80.8701 26.8836 79.3263 27.4888 77.2962 27.4888C76.0278 27.4888 74.9079 27.2418 73.9366 26.7478C73.0047 26.292 72.2229 25.579 71.6835 24.6929C71.1478 23.7913 70.8733 22.7585 70.8904 21.7098C70.876 20.666 71.1468 19.638 71.6735 18.7367C72.1852 17.8628 72.929 17.1477 73.8224 16.6709C74.7552 16.1893 75.7887 15.9354 76.8384 15.93C77.8881 15.9246 78.9241 16.1679 79.8617 16.6399C80.7415 17.1024 81.4695 17.8084 81.9586 18.6737C82.466 19.5569 82.72 20.5826 82.7207 21.7509C82.7207 21.7963 82.6996 22.0897 82.6576 22.6311ZM75.0421 19.0261C74.5414 19.4434 74.2357 20.0135 74.1248 20.7365H79.6534C79.5688 20.0749 79.2415 19.4683 78.7352 19.0342C78.2213 18.6056 77.5685 18.3795 76.8997 18.3983C76.162 18.3976 75.5428 18.6069 75.0421 19.0261V19.0261Z"
            fill="#323232"
          />
          <path
            d="M89.7093 22.9244L88.1451 24.4686V27.3265H84.8896V11.8462H88.1451V20.6082L92.9017 16.102H96.782L92.1086 20.8586L97.1996 27.3265H93.2562L89.7093 22.9244Z"
            fill="#323232"
          />
          <path
            d="M99.3276 27.1494C98.4377 26.9198 97.7284 26.631 97.1997 26.2832L98.2842 23.947C98.8477 24.2966 99.4594 24.5618 100.1 24.7341C100.778 24.9309 101.48 25.032 102.186 25.0345C103.563 25.0345 104.251 24.6937 104.251 24.0121C104.251 23.693 104.064 23.4637 103.688 23.3241C103.312 23.1846 102.735 23.0665 101.956 22.9697C101.188 22.8627 100.428 22.7021 99.6821 22.489C99.0888 22.3114 98.5527 21.9805 98.128 21.5297C97.6894 21.071 97.4704 20.4175 97.4711 19.569C97.4612 18.8887 97.6775 18.2244 98.0859 17.6804C98.4965 17.1316 99.0947 16.704 99.8804 16.3976C100.666 16.0912 101.594 15.938 102.665 15.938C103.462 15.9384 104.256 16.0261 105.034 16.1993C105.819 16.3736 106.469 16.6136 106.984 16.9193L105.9 19.2345C104.913 18.6789 103.798 18.3913 102.665 18.4004C101.97 18.4004 101.449 18.4978 101.101 18.6928C100.753 18.8877 100.579 19.1381 100.579 19.4438C100.579 19.7916 100.767 20.035 101.142 20.1738C101.517 20.3127 102.115 20.4462 102.937 20.5744C103.697 20.6927 104.449 20.8562 105.19 21.064C105.774 21.2377 106.3 21.5657 106.713 22.0133C107.144 22.4726 107.36 23.1125 107.36 23.933C107.368 24.6049 107.147 25.2597 106.734 25.7895C106.317 26.3323 105.708 26.7532 104.908 27.0523C104.109 27.3513 103.159 27.5009 102.06 27.5009C101.138 27.4997 100.22 27.3816 99.3276 27.1494V27.1494Z"
            fill="#323232"
          />
          <path
            d="M117.895 17.1765C118.83 18.005 119.297 19.2534 119.297 20.9217V27.3305H116.251V25.9286C115.639 26.972 114.499 27.4937 112.83 27.4937C111.967 27.4937 111.219 27.3475 110.587 27.0551C109.997 26.7999 109.494 26.3799 109.137 25.8455C108.801 25.3234 108.627 24.7138 108.636 24.0931C108.636 23.0496 109.029 22.2288 109.815 21.6307C110.601 21.0325 111.814 20.7321 113.456 20.7294H116.043C116.043 20.0204 115.827 19.4747 115.396 19.0922C114.964 18.7096 114.318 18.5207 113.456 18.5254C112.857 18.5256 112.262 18.6206 111.693 18.8068C111.161 18.9711 110.663 19.2292 110.222 19.5688L109.05 17.2917C109.721 16.833 110.466 16.4942 111.253 16.2903C112.112 16.0531 113 15.9335 113.892 15.9348C115.629 15.9348 116.963 16.3487 117.895 17.1765ZM115.12 24.9172C115.552 24.6593 115.878 24.256 116.039 23.7796V22.631H113.807C112.471 22.631 111.804 23.0693 111.804 23.9458C111.797 24.1386 111.839 24.33 111.924 24.5029C112.01 24.6759 112.137 24.825 112.293 24.9372C112.621 25.1805 113.069 25.3017 113.639 25.3017C114.159 25.3119 114.671 25.1789 115.12 24.9172V24.9172Z"
            fill="#323232"
          />
          <path
            d="M17.1446 13.6868H14.0273V32H17.1446V13.6868Z"
            fill="#82C341"
          />
          <path
            d="M0 14.8564V23.4322C0 24.4656 0.410508 25.4567 1.14122 26.1874C1.87193 26.9181 2.86298 27.3286 3.89636 27.3286H12.4691V18.7568C12.4695 18.2447 12.369 17.7376 12.1733 17.2644C11.9777 16.7912 11.6906 16.3612 11.3287 15.999C10.9668 15.6368 10.537 15.3494 10.0639 15.1534C9.59089 14.9574 9.08385 14.8564 8.57179 14.8564H0ZM9.35186 24.2073H4.67543C4.26218 24.2073 3.86586 24.0431 3.57366 23.7509C3.28145 23.4587 3.11729 23.0624 3.11729 22.6492V17.9737H7.79272C8.20605 17.9737 8.60248 18.1379 8.89484 18.43C9.18721 18.7222 9.3516 19.1185 9.35186 19.5319V24.2073Z"
            fill="#82C341"
          />
          <path
            d="M22.5992 14.8564C21.5658 14.8564 20.5747 15.267 19.844 15.9977C19.1133 16.7284 18.7028 17.7194 18.7028 18.7528V27.3246H27.2756C28.3083 27.3246 29.2988 26.9146 30.0294 26.1848C30.7599 25.455 31.1709 24.4649 31.172 23.4322V14.8605L22.5992 14.8564ZM21.8201 19.5319C21.8204 19.1185 21.9848 18.7222 22.2771 18.43C22.5695 18.1379 22.9659 17.9737 23.3793 17.9737H28.0547V22.6492C28.0547 23.0624 27.8905 23.4587 27.5983 23.7509C27.3061 24.0431 26.9098 24.2073 26.4965 24.2073H21.8201V19.5319Z"
            fill="#82C341"
          />
          <path
            d="M9.52403 6.06133C8.7944 6.79206 8.38458 7.78248 8.38458 8.81512C8.38458 9.84775 8.7944 10.8382 9.52403 11.5689L15.5854 17.6302L21.6477 11.5689C22.3773 10.8382 22.7872 9.84775 22.7872 8.81512C22.7872 7.78248 22.3773 6.79206 21.6477 6.06133L15.5854 0L9.52403 6.06133ZM12.2798 9.91863C11.9878 9.62645 11.8237 9.23024 11.8237 8.81712C11.8237 8.404 11.9878 8.00779 12.2798 7.71561L15.5844 4.41106L18.8889 7.71561C19.181 8.00779 19.345 8.404 19.345 8.81712C19.345 9.23024 19.181 9.62645 18.8889 9.91863L15.5844 13.2232L12.2798 9.91863Z"
            fill="#82C341"
          />
        </svg>
      </Box>
    </>
  )
}
