import NavItem from "./NavItem";

const NavbarData = {
  Menu: [
    {
      label: "Home",
      href: "/",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.24 21.55H5.55998C4.47998 21.55 3.59998 20.67 3.59998 19.59V10.35C3.59998 9.76998 3.84998 9.22998 4.28998 8.85998L11.13 3.06998C11.86 2.44998 12.93 2.44998 13.66 3.06998L20.5 8.85998C20.94 9.22998 21.19 9.77998 21.19 10.35V19.59C21.2 20.67 20.32 21.55 19.24 21.55Z"
            fill="#E6E6E6"
          />
          <path d="M14.85 13.73H9.95996V21.55H14.85V13.73Z" fill="white" />
        </svg>
      ),
      activeIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.24 21.55H5.55998C4.47998 21.55 3.59998 20.67 3.59998 19.59V10.35C3.59998 9.76998 3.84998 9.22998 4.28998 8.85998L11.13 3.06998C11.86 2.44998 12.93 2.44998 13.66 3.06998L20.5 8.85998C20.94 9.22998 21.19 9.77998 21.19 10.35V19.59C21.2 20.67 20.32 21.55 19.24 21.55Z"
            fill="#00A4FF"
          />
          <path d="M14.85 13.73H9.95996V21.55H14.85V13.73Z" fill="white" />
        </svg>
      ),
    },
    {
      label: "Explore Rounds",
      href: "/explorerounds",
      icon: (
        <svg
          fill="#D8D8D8"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#D8D8D8"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M17.9842695,7.39078625 C18.1985588,6.64477525 17.4973604,5.9435768 16.7513494,6.1578661 L16.6494246,6.19284365 L9.57835679,9.02127078 L9.47282273,9.07079854 C9.30957453,9.15937167 9.17428758,9.29167162 9.08209683,9.45256344 L9.02127078,9.57835679 L6.19284365,16.6494246 L6.1578661,16.7513494 C5.9435768,17.4973604 6.64477525,18.1985588 7.39078625,17.9842695 L7.49271102,17.949292 L14.5637788,15.1208648 L14.6693129,15.0713371 C14.8325611,14.982764 14.967848,14.850464 15.0600388,14.6895722 L15.1208648,14.5637788 L17.949292,7.49271102 L17.9842695,7.39078625 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z"
            ></path>{" "}
          </g>
        </svg>
      ),
      activeIcon: (
        <svg
          fill="#00a4ff"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#00a4ff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M17.9842695,7.39078625 C18.1985588,6.64477525 17.4973604,5.9435768 16.7513494,6.1578661 L16.6494246,6.19284365 L9.57835679,9.02127078 L9.47282273,9.07079854 C9.30957453,9.15937167 9.17428758,9.29167162 9.08209683,9.45256344 L9.02127078,9.57835679 L6.19284365,16.6494246 L6.1578661,16.7513494 C5.9435768,17.4973604 6.64477525,18.1985588 7.39078625,17.9842695 L7.49271102,17.949292 L14.5637788,15.1208648 L14.6693129,15.0713371 C14.8325611,14.982764 14.967848,14.850464 15.0600388,14.6895722 L15.1208648,14.5637788 L17.949292,7.49271102 L17.9842695,7.39078625 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      label: "Projects",
      href: "/projects",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.482 2.00014C13.1608 1.9991 13.7632 1.99817 14.3196 2.22864C14.876 2.45911 15.3014 2.88576 15.7806 3.36649C16.7302 4.31899 17.6813 5.27008 18.6338 6.21966C19.1145 6.69891 19.5412 7.12425 19.7716 7.68066C20.0021 8.23706 20.0012 8.83951 20.0001 9.51832C19.9976 11.2061 19.9984 12.8938 19.9992 14.5816C19.9996 15.4098 20 16.2379 20 17.0661C20.0001 17.9526 20.0001 18.7164 19.9179 19.3281C19.8297 19.9836 19.631 20.6119 19.1213 21.1216C18.6117 21.6313 17.9833 21.83 17.3278 21.9181C16.7161 22.0004 15.9523 22.0003 15.0658 22.0003H8.9342C8.0477 22.0003 7.28388 22.0004 6.67221 21.9181C6.0167 21.83 5.38835 21.6313 4.87868 21.1216C4.36902 20.6119 4.17028 19.9836 4.08215 19.3281C3.99991 18.7164 3.99995 17.9526 4 17.0661L4.00001 7.00028L4 6.93445C3.99995 6.04796 3.99991 5.28415 4.08215 4.67249C4.17028 4.01697 4.36902 3.38862 4.87869 2.87896C5.38835 2.3693 6.0167 2.17055 6.67221 2.08242C7.28387 2.00019 8.04769 2.00023 8.93418 2.00028L10.0378 2.00064C10.8525 2.00101 11.6672 2.00139 12.482 2.00014ZM12 6.00024C12 6.55253 11.5523 7.00024 11 7.00024H9C8.44772 7.00024 8 6.55253 8 6.00024C8 5.44796 8.44772 5.00024 9 5.00024H11C11.5523 5.00024 12 5.44796 12 6.00024ZM12 10.0002C12.5523 10.0002 13 9.55253 13 9.00024C13 8.44796 12.5523 8.00024 12 8.00024H10C9.44772 8.00024 9 8.44796 9 9.00024C9 9.55253 9.44772 10.0002 10 10.0002H12ZM12 12.0002C12 12.5525 11.5523 13.0002 11 13.0002H9C8.44772 13.0002 8 12.5525 8 12.0002C8 11.448 8.44772 11.0002 9 11.0002H11C11.5523 11.0002 12 11.448 12 12.0002ZM12 16.0002C12.5523 16.0002 13 15.5525 13 15.0002C13 14.448 12.5523 14.0002 12 14.0002H10C9.44772 14.0002 9 14.448 9 15.0002C9 15.5525 9.44772 16.0002 10 16.0002H12Z"
            fill="#D8D8D8"
          />
        </svg>
      ),
      activeIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.482 2.00014C13.1608 1.9991 13.7632 1.99817 14.3196 2.22864C14.876 2.45911 15.3014 2.88576 15.7806 3.36649C16.7302 4.31899 17.6813 5.27008 18.6338 6.21966C19.1145 6.69891 19.5412 7.12425 19.7716 7.68066C20.0021 8.23706 20.0012 8.83951 20.0001 9.51832C19.9976 11.2061 19.9984 12.8938 19.9992 14.5816C19.9996 15.4098 20 16.2379 20 17.0661C20.0001 17.9526 20.0001 18.7164 19.9179 19.3281C19.8297 19.9836 19.631 20.6119 19.1213 21.1216C18.6117 21.6313 17.9833 21.83 17.3278 21.9181C16.7161 22.0004 15.9523 22.0003 15.0658 22.0003H8.9342C8.0477 22.0003 7.28388 22.0004 6.67221 21.9181C6.0167 21.83 5.38835 21.6313 4.87868 21.1216C4.36902 20.6119 4.17028 19.9836 4.08215 19.3281C3.99991 18.7164 3.99995 17.9526 4 17.0661L4.00001 7.00028L4 6.93445C3.99995 6.04796 3.99991 5.28415 4.08215 4.67249C4.17028 4.01697 4.36902 3.38862 4.87869 2.87896C5.38835 2.3693 6.0167 2.17055 6.67221 2.08242C7.28387 2.00019 8.04769 2.00023 8.93418 2.00028L10.0378 2.00064C10.8525 2.00101 11.6672 2.00139 12.482 2.00014ZM12 6.00024C12 6.55253 11.5523 7.00024 11 7.00024H9C8.44772 7.00024 8 6.55253 8 6.00024C8 5.44796 8.44772 5.00024 9 5.00024H11C11.5523 5.00024 12 5.44796 12 6.00024ZM12 10.0002C12.5523 10.0002 13 9.55253 13 9.00024C13 8.44796 12.5523 8.00024 12 8.00024H10C9.44772 8.00024 9 8.44796 9 9.00024C9 9.55253 9.44772 10.0002 10 10.0002H12ZM12 12.0002C12 12.5525 11.5523 13.0002 11 13.0002H9C8.44772 13.0002 8 12.5525 8 12.0002C8 11.448 8.44772 11.0002 9 11.0002H11C11.5523 11.0002 12 11.448 12 12.0002ZM12 16.0002C12.5523 16.0002 13 15.5525 13 15.0002C13 14.448 12.5523 14.0002 12 14.0002H10C9.44772 14.0002 9 14.448 9 15.0002C9 15.5525 9.44772 16.0002 10 16.0002H12Z"
            fill="#00A4FF"
          />
        </svg>
      ),
    },
    {
      label: "Rewards",
      href: "/rewards",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.9905 11.1457C23.9905 11.0926 23.9905 11.0395 23.981 10.9864C23.7908 4.89561 18.4939 0 11.9988 0C5.50372 0 0.206839 4.89561 0.0166463 10.9864C0.00713661 11.0483 0.00713673 11.1014 0.00713673 11.1546C-0.00237891 11.2132 -0.00237891 11.2729 0.00713673 11.3316C0.0356657 11.8451 0.282917 12.332 0.74889 12.7392L9.48826 19.5116H7.99525C7.90596 19.5122 7.81766 19.5291 7.7354 19.5615C7.65315 19.5938 7.57854 19.641 7.51585 19.7001C7.45315 19.7593 7.40359 19.8294 7.37 19.9065C7.3364 19.9835 7.31944 20.0659 7.32006 20.149V23.3715C7.32069 23.538 7.39202 23.6975 7.51851 23.8153C7.645 23.933 7.81637 23.9994 7.99525 24H15.679C15.8579 23.9994 16.0293 23.933 16.1558 23.8153C16.2823 23.6975 16.3536 23.538 16.3542 23.3715V20.149C16.3549 20.0659 16.3379 19.9835 16.3043 19.9065C16.2707 19.8294 16.2211 19.7593 16.1585 19.7001C16.0958 19.641 16.0211 19.5938 15.9389 19.5615C15.8566 19.5291 15.7683 19.5122 15.679 19.5116H14.2241L23.2773 12.7038C23.7052 12.332 23.962 11.8451 23.9905 11.3316C24 11.3051 24 11.2873 24 11.2608C24 11.2254 24 11.19 23.9905 11.1457ZM11.9988 2.21321C15.7646 2.21321 19.0264 4.26706 20.6051 7.25931C20.1551 7.13088 19.6872 7.06525 19.2166 7.06455C18.0374 7.06455 16.9438 7.48063 16.088 8.21542C15.6385 7.58947 15.0302 7.07624 14.317 6.72111C13.6038 6.36598 12.8076 6.17989 11.9988 6.17927C10.2966 6.17927 8.78455 7.00258 7.89064 8.24198C7.05707 7.48381 5.93685 7.06095 4.77147 7.06455C4.29599 7.06455 3.83002 7.13537 3.39257 7.25931C4.97118 4.26706 8.23299 2.21321 11.9988 2.21321ZM2.39406 11.1369C2.62229 10.0657 3.6113 9.27776 4.77147 9.27776C6.38812 9.27776 7.03477 10.8359 7.19644 11.3139L9.19346 16.4043L2.39406 11.1369ZM11.8752 16.7761L9.45973 10.6322C9.45973 10.6322 9.45023 10.6057 9.44072 10.588C9.57385 9.35743 10.6675 8.39248 11.9988 8.39248C13.3302 8.39248 14.3572 9.30432 14.5379 10.4906L11.8752 16.7761ZM14.5949 16.3954L16.8487 11.0572C16.8678 10.9952 16.9058 10.9244 16.9438 10.8359C17.2196 10.287 17.8948 9.27776 19.2166 9.27776C20.3768 9.27776 21.3753 10.0657 21.5941 11.128L14.5949 16.3954Z"
            fill="#D8D8D8"
          />
        </svg>
      ),
      activeIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.9905 11.1457C23.9905 11.0926 23.9905 11.0395 23.981 10.9864C23.7908 4.89561 18.4939 0 11.9988 0C5.50372 0 0.206839 4.89561 0.0166463 10.9864C0.0071366 11.0483 0.00713673 11.1014 0.00713673 11.1546C-0.00237891 11.2132 -0.00237891 11.2729 0.00713673 11.3316C0.0356657 11.8451 0.282917 12.332 0.74889 12.7392L9.48826 19.5116H7.99525C7.90596 19.5122 7.81766 19.5291 7.7354 19.5615C7.65315 19.5938 7.57854 19.641 7.51585 19.7001C7.45315 19.7593 7.40359 19.8294 7.37 19.9065C7.3364 19.9835 7.31944 20.0659 7.32006 20.149V23.3715C7.32069 23.538 7.39202 23.6975 7.51851 23.8153C7.645 23.933 7.81637 23.9994 7.99525 24H15.679C15.8579 23.9994 16.0293 23.933 16.1558 23.8153C16.2823 23.6975 16.3536 23.538 16.3542 23.3715V20.149C16.3549 20.0659 16.3379 19.9835 16.3043 19.9065C16.2707 19.8294 16.2212 19.7593 16.1585 19.7001C16.0958 19.641 16.0211 19.5938 15.9389 19.5615C15.8566 19.5291 15.7683 19.5122 15.679 19.5116H14.2241L23.2773 12.7038C23.7052 12.332 23.962 11.8451 23.9905 11.3316C24 11.3051 24 11.2873 24 11.2608C24 11.2254 24 11.19 23.9905 11.1457ZM11.9988 2.21321C15.7646 2.21321 19.0264 4.26706 20.6051 7.25931C20.1551 7.13088 19.6872 7.06525 19.2166 7.06455C18.0374 7.06455 16.9438 7.48063 16.088 8.21542C15.6385 7.58947 15.0302 7.07624 14.317 6.72111C13.6038 6.36598 12.8076 6.17989 11.9988 6.17927C10.2966 6.17927 8.78455 7.00258 7.89064 8.24198C7.05707 7.48381 5.93685 7.06095 4.77147 7.06455C4.29599 7.06455 3.83002 7.13537 3.39257 7.25931C4.97118 4.26706 8.23299 2.21321 11.9988 2.21321ZM2.39406 11.1368C2.62229 10.0657 3.6113 9.27776 4.77147 9.27776C6.38812 9.27776 7.03477 10.8359 7.19644 11.3139L9.19346 16.4043L2.39406 11.1368ZM11.8752 16.7761L9.45973 10.6322C9.45973 10.6322 9.45023 10.6057 9.44072 10.588C9.57385 9.35743 10.6675 8.39247 11.9988 8.39247C13.3302 8.39247 14.3572 9.30432 14.5379 10.4906L11.8752 16.7761ZM14.5949 16.3954L16.8487 11.0572C16.8678 10.9952 16.9058 10.9244 16.9438 10.8359C17.2196 10.287 17.8948 9.27776 19.2166 9.27776C20.3768 9.27776 21.3753 10.0657 21.5941 11.128L14.5949 16.3954Z"
            fill="#00A4FF"
          />
        </svg>
      ),
    },
    {
      label: "Bridge Tokens",
      href: "/bridge",
      icon: (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8 13C8 13 14 23 24 23C34 23 40 13 40 13"
              stroke="#D8D8D8"
              stroke-width="4"
            ></path>{" "}
            <path
              d="M8 10V38"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M40 10V38"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M4 30.5C4 30.5 16.1877 29.9026 24 30C31.8196 30.0975 44 31 44 31"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M16 21V30"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M24 23L24 30"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M32 21L32 30"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M8 13L4 18"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M44 18L40 13"
              stroke="#D8D8D8"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
      activeIcon: (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8 13C8 13 14 23 24 23C34 23 40 13 40 13"
              stroke="#00a4ff"
              stroke-width="4"
            ></path>{" "}
            <path
              d="M8 10V38"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M40 10V38"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M4 30.5C4 30.5 16.1877 29.9026 24 30C31.8196 30.0975 44 31 44 31"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M16 21V30"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M24 23L24 30"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M32 21L32 30"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M8 13L4 18"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M44 18L40 13"
              stroke="#00a4ff"
              stroke-width="4"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      label: "Mint a domain",
      href: "/mint-domain",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M10.1389 13C9.55121 13 9.08627 13.5059 9.19686 14.0831C9.52893 15.8163 10.2677 17.4049 11.3108 18.7462C11.6637 19.2 12.3363 19.2 12.6892 18.7462C13.7322 17.4049 14.471 15.8164 14.8031 14.0831C14.9137 13.5059 14.4488 13 13.8611 13H10.1389Z"
            fill="#D8D8D8"
          />
          <path
            d="M17.8887 13C17.3659 13 16.9355 13.4037 16.8589 13.9209C16.5112 16.267 15.5367 18.409 14.1119 20.1704C13.8039 20.5512 13.848 21.1177 14.2353 21.4176V21.4176C14.4402 21.5762 14.7079 21.6325 14.9555 21.556C18.3845 20.4967 21.0255 17.6424 21.781 14.0908C21.904 13.5124 21.4376 13 20.8463 13H17.8887Z"
            fill="#D8D8D8"
          />
          <path
            d="M3.15352 13C2.56218 13 2.09582 13.5124 2.21886 14.0908C3.00142 17.7696 5.80689 20.7002 9.41564 21.6629C9.66029 21.7281 9.91894 21.6492 10.0955 21.4678V21.4678C10.3689 21.1868 10.3695 20.7413 10.1148 20.4433C8.56666 18.6322 7.50675 16.3896 7.14096 13.9209C7.06432 13.4037 6.63392 13 6.11108 13H3.15352Z"
            fill="#D8D8D8"
          />
          <path
            d="M21.7811 9.90948C21.9041 10.4879 21.4377 11.0003 20.8464 11.0003H17.8889C17.366 11.0003 16.9356 10.5965 16.859 10.0793C16.5113 7.73322 15.5368 5.59121 14.112 3.82984C13.804 3.44901 13.8481 2.88253 14.2354 2.58267V2.58267C14.4403 2.42406 14.708 2.36775 14.9556 2.44423C18.3846 3.50359 21.0256 6.35783 21.7811 9.90948Z"
            fill="#D8D8D8"
          />
          <path
            d="M14.8031 9.91699C14.9137 10.4942 14.4488 11.0001 13.8611 11.0001H10.1389C9.55121 11.0001 9.08627 10.4942 9.19686 9.91699C9.52893 8.18378 10.2677 6.5952 11.3108 5.25388C11.6637 4.80011 12.3363 4.80011 12.6892 5.25389C13.7323 6.5952 14.4711 8.18377 14.8031 9.91699Z"
            fill="#D8D8D8"
          />
          <path
            d="M9.04277 2.44467C9.29111 2.3679 9.55976 2.42471 9.76494 2.58429V2.58429C10.1512 2.88472 10.1947 3.45048 9.88695 3.83098C8.46272 5.59213 7.48852 7.73368 7.14096 10.0793C7.06432 10.5965 6.63392 11.0002 6.11108 11.0002H3.15352C2.56218 11.0002 2.09581 10.4878 2.21885 9.90943C2.97422 6.35833 5.61452 3.50441 9.04277 2.44467Z"
            fill="#D8D8D8"
          />
        </svg>
      ),
      activeIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M10.1389 13C9.55121 13 9.08627 13.5059 9.19686 14.0831C9.52893 15.8163 10.2677 17.4049 11.3108 18.7462C11.6637 19.2 12.3363 19.2 12.6892 18.7462C13.7322 17.4049 14.471 15.8164 14.8031 14.0831C14.9137 13.5059 14.4488 13 13.8611 13H10.1389Z"
            fill="#00A4FF"
          />
          <path
            d="M17.8887 13C17.3659 13 16.9355 13.4037 16.8589 13.9209C16.5112 16.267 15.5367 18.409 14.1119 20.1704C13.8039 20.5512 13.848 21.1177 14.2353 21.4176V21.4176C14.4402 21.5762 14.7079 21.6325 14.9555 21.556C18.3845 20.4967 21.0255 17.6424 21.781 14.0908C21.904 13.5124 21.4376 13 20.8463 13H17.8887Z"
            fill="#00A4FF"
          />
          <path
            d="M3.15352 13C2.56218 13 2.09582 13.5124 2.21886 14.0908C3.00142 17.7696 5.80689 20.7002 9.41564 21.6629C9.66029 21.7281 9.91894 21.6492 10.0955 21.4678V21.4678C10.3689 21.1868 10.3695 20.7413 10.1148 20.4433C8.56666 18.6322 7.50675 16.3896 7.14096 13.9209C7.06432 13.4037 6.63392 13 6.11108 13H3.15352Z"
            fill="300A4FF"
          />
          <path
            d="M21.7811 9.90948C21.9041 10.4879 21.4377 11.0003 20.8464 11.0003H17.8889C17.366 11.0003 16.9356 10.5965 16.859 10.0793C16.5113 7.73322 15.5368 5.59121 14.112 3.82984C13.804 3.44901 13.8481 2.88253 14.2354 2.58267V2.58267C14.4403 2.42406 14.708 2.36775 14.9556 2.44423C18.3846 3.50359 21.0256 6.35783 21.7811 9.90948Z"
            fill="#00A4FF"
          />
          <path
            d="M14.8031 9.91699C14.9137 10.4942 14.4488 11.0001 13.8611 11.0001H10.1389C9.55121 11.0001 9.08627 10.4942 9.19686 9.91699C9.52893 8.18378 10.2677 6.5952 11.3108 5.25388C11.6637 4.80011 12.3363 4.80011 12.6892 5.25389C13.7323 6.5952 14.4711 8.18377 14.8031 9.91699Z"
            fill="#00A4FF"
          />
          <path
            d="M9.04277 2.44467C9.29111 2.3679 9.55976 2.42471 9.76494 2.58429V2.58429C10.1512 2.88472 10.1947 3.45048 9.88695 3.83098C8.46272 5.59213 7.48852 7.73368 7.14096 10.0793C7.06432 10.5965 6.63392 11.0002 6.11108 11.0002H3.15352C2.56218 11.0002 2.09581 10.4878 2.21885 9.90943C2.97422 6.35833 5.61452 3.50441 9.04277 2.44467Z"
            fill="#00A4FF"
          />
        </svg>
      ),
      isBeta: true
    },
    {
      label: "Docs",
      href: "/docs",
      icon: (
        <svg
          fill="#D8D8D8"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174" />
        </svg>
      ),
      activeIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_147_549)">
            <path
              d="M6.91691 0.621264C7.97133 0.461408 9.78028 0.260742 12.2173 0.260742C14.6543 0.260742 16.4632 0.461408 17.5176 0.621264C18.2772 0.736417 18.79 1.36931 18.79 2.08452C18.79 3.24121 18.297 4.28747 17.5012 5.04186C17.483 5.0453 17.464 5.04885 17.4443 5.0525C17.1951 5.09867 16.8188 5.16139 16.324 5.22446C15.3343 5.35072 13.8705 5.4785 12.0003 5.4785C10.1301 5.4785 8.66635 5.35072 7.67662 5.22446C7.43302 5.19342 7.21822 5.16243 7.03309 5.13347C6.17902 4.37341 5.64453 3.28882 5.64453 2.08452C5.64453 1.36931 6.15737 0.736417 6.91691 0.621264Z"
              fill="#00A4FF"
            />
            <path
              d="M6.22876 6.58647C6.23433 6.58751 6.23989 6.58856 6.24551 6.5896C6.52473 6.6413 6.93256 6.70903 7.46045 6.77633C8.51618 6.91099 10.0524 7.04409 12.0004 7.04409C13.9484 7.04409 15.4846 6.91099 16.5404 6.77633C17.0683 6.70903 17.4761 6.6413 17.7553 6.5896C17.8949 6.56372 18.0024 6.54191 18.0767 6.52611C18.0876 6.52381 18.0978 6.52162 18.1073 6.51953C19.5436 7.4835 20.7828 8.74637 21.7443 10.1394C23.1233 12.1371 23.9446 14.4224 23.9446 16.5096C23.9446 19.1794 22.6001 21.0044 20.4494 22.1466C18.3178 23.2785 15.4002 23.7394 12.2174 23.7394C9.03458 23.7394 6.117 23.2785 3.98542 22.1466C1.83465 21.0044 0.490112 19.1794 0.490112 16.5096C0.490112 14.4224 1.31147 12.1371 2.69042 10.1394C3.62986 8.77835 4.83436 7.54162 6.22876 6.58647Z"
              fill="#00A4FF"
            />
            <rect
              width="10.9091"
              height="10.4348"
              transform="translate(6.54541 9.91309)"
              fill="#00A4FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 9.91309C10.9768 9.91309 10.1175 9.96484 9.40909 10.1154C8.69451 10.2673 8.10059 10.5267 7.64373 10.9636C7.18687 11.4006 6.91576 11.9687 6.75695 12.6523C6.59952 13.3298 6.54541 14.1519 6.54541 15.1305C6.54541 16.1091 6.59952 16.9311 6.75695 17.6087C6.91576 18.2922 7.18687 18.8603 7.64373 19.2973C8.10059 19.7343 8.69451 19.9936 9.40909 20.1455C10.1175 20.2961 10.9768 20.3479 12 20.3479C13.0231 20.3479 13.8824 20.2961 14.5908 20.1455C15.3054 19.9936 15.8993 19.7343 16.3562 19.2973C16.813 18.8603 17.0842 18.2922 17.243 17.6087C17.4004 16.9311 17.4545 16.1091 17.4545 15.1305C17.4545 14.1519 17.4004 13.3298 17.243 12.6523C17.0842 11.9687 16.813 11.4006 16.3562 10.9636C15.8993 10.5267 15.3054 10.2673 14.5908 10.1154C13.8824 9.96484 13.0231 9.91309 12 9.91309ZM10.909 12C11.2103 12 11.4545 12.2336 11.4545 12.5218V12.7827H12V12.5218C12 12.2336 12.2442 12 12.5454 12C12.8467 12 13.0909 12.2336 13.0909 12.5218V12.8014C13.4486 12.8517 13.7533 13.002 13.9802 13.2299C14.256 13.5069 14.3863 13.8678 14.3863 14.2174C14.3863 14.5365 14.2778 14.865 14.0492 15.1305C14.2778 15.396 14.3863 15.7245 14.3863 16.0435C14.3863 16.3931 14.256 16.7541 13.9802 17.0311C13.7533 17.259 13.4486 17.4092 13.0909 17.4596V17.7392C13.0909 18.0273 12.8467 18.2609 12.5454 18.2609C12.2442 18.2609 12 18.0273 12 17.7392V17.4783H11.4545V17.7392C11.4545 18.0273 11.2103 18.2609 10.909 18.2609C10.6078 18.2609 10.3636 18.0273 10.3636 17.7392V17.4783H9.81814C9.51689 17.4783 9.27268 17.2447 9.27268 16.9566C9.27268 16.6684 9.51689 16.4348 9.81814 16.4348H10.3636V13.8261H9.81814C9.51689 13.8261 9.27268 13.5925 9.27268 13.3044C9.27268 13.0162 9.51689 12.7827 9.81814 12.7827H10.3636V12.5218C10.3636 12.2336 10.6078 12 10.909 12Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4545 14.6088V13.8262H12.8181C13.0236 13.8262 13.1319 13.891 13.1902 13.9496C13.2553 14.015 13.2954 14.1105 13.2954 14.2175C13.2954 14.3244 13.2553 14.42 13.1902 14.4854C13.1319 14.5439 13.0236 14.6088 12.8181 14.6088H11.4545Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8181 16.435C13.0236 16.435 13.1319 16.3701 13.1902 16.3115C13.2553 16.2461 13.2954 16.1506 13.2954 16.0436C13.2954 15.9367 13.2553 15.8412 13.1902 15.7758C13.1319 15.7172 13.0236 15.6523 12.8181 15.6523H11.4545V16.435H12.8181Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_147_549">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ],
  "Follow Us": [
    {
      label: "",
      href: "#",
      icon: (
        <>
          <>
            <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#00a4ff"
                class="bi bi-discord"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />{" "}
              </svg>
              <span class="sr-only">Icon description</span>
            </span>
            <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800  rounded-full dark:bg-gray-700 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                fill="none"
              >
                <path
                  fill="#00a4ff"
                  fillRule="evenodd"
                  d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </span>
            <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  fill="#00A4FF"
                  d="M20 6.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H4c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8Z"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </span>
          </>
        </>
      ),
      activeIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M10.1389 13C9.55121 13 9.08627 13.5059 9.19686 14.0831C9.52893 15.8163 10.2677 17.4049 11.3108 18.7462C11.6637 19.2 12.3363 19.2 12.6892 18.7462C13.7322 17.4049 14.471 15.8164 14.8031 14.0831C14.9137 13.5059 14.4488 13 13.8611 13H10.1389Z"
            fill="#00A4FF"
          />
          <path
            d="M17.8887 13C17.3659 13 16.9355 13.4037 16.8589 13.9209C16.5112 16.267 15.5367 18.409 14.1119 20.1704C13.8039 20.5512 13.848 21.1177 14.2353 21.4176C14.4402 21.5762 14.7079 21.6325 14.9555 21.556C18.3845 20.4967 21.0255 17.6424 21.781 14.0908C21.904 13.5124 21.4376 13 20.8463 13H17.8887Z"
            fill="#00A4FF"
          />
          <path
            d="M3.15352 13C2.56218 13 2.09582 13.5124 2.21886 14.0908C3.00142 17.7696 5.80689 20.7002 9.41564 21.6629C9.66029 21.7281 9.91894 21.6492 10.0955 21.4678C10.3689 21.1868 10.3695 20.7413 10.1148 20.4433C8.56666 18.6322 7.50675 16.3896 7.14096 13.9209C7.06432 13.4037 6.63392 13 6.11108 13H3.15352Z"
            fill="#00A4FF"
          />
          <path
            d="M21.7811 9.90948C21.9041 10.4879 21.4377 11.0003 20.8464 11.0003H17.8889C17.366 11.0003 16.9356 10.5965 16.859 10.0793C16.5113 7.73322 15.5368 5.59121 14.112 3.82984C13.804 3.44901 13.8481 2.88253 14.2354 2.58267C14.4403 2.42406 14.708 2.36775 14.9556 2.44423C18.3846 3.50359 21.0256 6.35783 21.7811 9.90948Z"
            fill="#00A4FF"
          />
          <path
            d="M14.8031 9.91699C14.9137 10.4942 14.4488 11.0001 13.8611 11.0001H10.1389C9.55121 11.0001 9.08627 10.4942 9.19686 9.91699C9.52893 8.18377 10.2677 6.5952 11.3108 5.25388C11.6637 4.80011 12.3363 4.80011 12.6892 5.25389C13.7323 6.5952 14.4711 8.18377 14.8031 9.91699Z"
            fill="#00A4FF"
          />
          <path
            d="M9.04277 2.44467C9.29111 2.3679 9.55976 2.42471 9.76494 2.58429C10.1512 2.88472 10.1947 3.45048 9.88695 3.83098C8.46272 5.59213 7.48852 7.73368 7.14096 10.0793C7.06432 10.5965 6.63392 11.0002 6.11108 11.0002H3.15352C2.56218 11.0002 2.09581 10.4878 2.21885 9.90943C2.97422 6.35833 5.61452 3.50441 9.04277 2.44467Z"
            fill="#00A4FF"
          />
        </svg>
      ),
      isComing: true,
    },
  ],
};

const Navbar = ({ setShowSideBar }) => {
  return (
    <div className="space-y-4">
      {Object.entries(NavbarData).map(([key, value]) => (
        <div key={key} className="space-y-2.5">
          <h1 className="text-Quick-Silver font-medium text-base">{key}</h1>
          <div>
            {value?.map((NavBarItem) => {
              return (
                <div key={NavBarItem.href}>
                  {NavBarItem?.isComing ? (
                    <div
                      className={`flex relative cursor-pointer items-center justify-between w-full rounded-xl py-2.5 space-x-4 text-Light-Slate-Gray`}
                    >
                      <div>{NavBarItem?.icon}</div>
                      <h1 className={`flex-1 text-base font-normal`}>
                        {NavBarItem?.label}
                      </h1>
                    </div>
                  ) : NavBarItem?.isBeta ? (
                    <div
                      className={`flex relative items-center justify-between w-full rounded-xl py-2.5 space-x-4 text-Light-Slate-Gray`}
                    >
                      <div>{NavBarItem?.icon}</div>
                      <h1 className={`flex-1 text-base font-normal`}>
                        {NavBarItem?.label}
                      </h1>
                      <div className="float-right rounded-2xl text-sm px-2 bg-red-600 w-fit text-white">Beta</div>
                    </div>
                  ) : (
                    <NavItem
                      setShowSideBar={setShowSideBar}
                      NavItemData={NavBarItem}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
