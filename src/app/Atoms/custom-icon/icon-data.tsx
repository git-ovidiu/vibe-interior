// Icon.tsx
import React from 'react';

export interface IconProps {
	color?: string;
	name: string;
}

export const icons: { [key: string]: JSX.Element } = {
	letter_v: (
		<svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19 36C17.3008 36 15.6273 35.2735 13.9796 33.8205C12.3834 32.3675 10.8902 30.5387 9.49998 28.3342C8.10974 26.1296 6.82249 23.7245 5.6382 21.119C4.45393 18.4635 3.44986 15.9834 2.626 13.6784C1.80216 11.3237 1.15853 9.29438 0.695121 7.59078C0.231706 5.88719 0 4.83498 0 4.43425C0 3.28185 0.437669 2.25471 1.313 1.35282C2.18833 0.450947 3.24389 0 4.47966 0C5.56096 0 6.46205 0.300638 7.1829 0.901893C7.95527 1.45303 8.80486 2.07935 9.73168 2.78079C10.71 3.43216 11.8943 4.03342 13.2845 4.58455C14.6748 5.13564 16.5799 5.41127 19 5.41127C21.3685 5.41127 23.2479 5.13564 24.6382 4.58455C26.0799 4.03342 27.2641 3.43216 28.1911 2.78079C29.1178 2.07935 29.9418 1.45303 30.6624 0.901893C31.435 0.300638 32.3617 0 33.443 0C34.6789 0 35.7342 0.450947 36.6097 1.35282C37.5364 2.25471 38 3.28185 38 4.43425C38 4.83498 37.7682 5.88719 37.3049 7.59078C36.8413 9.29438 36.1721 11.3237 35.2966 13.6784C34.4728 15.9834 33.4687 18.4635 32.2845 21.119C31.1517 23.7245 29.8644 26.1296 28.4226 28.3342C27.0326 30.5387 25.5391 32.3675 23.943 33.8205C22.3468 35.2735 20.6992 36 19 36Z" />
		</svg>
	),
	letter_i: (
		<svg width="11" height="44" viewBox="0 0 11 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5.50011 5.76807C4.65763 5.76807 3.96393 5.49694 3.419 4.95463C2.87385 4.41234 2.60128 3.72214 2.60128 2.88405C2.60128 2.09524 2.87385 1.42969 3.419 0.887409C3.96393 0.295811 4.65763 0 5.50011 0C6.29285 0 6.9618 0.295811 7.50672 0.887409C8.10139 1.42969 8.39872 2.09524 8.39872 2.88405C8.39872 3.72214 8.10139 4.41234 7.50672 4.95463C6.9618 5.49694 6.29285 5.76807 5.50011 5.76807ZM9.95944 13.4589C10.0587 13.9025 10.1577 14.4203 10.2568 15.0117C10.4056 15.6034 10.5294 16.3921 10.6284 17.3782C10.7277 18.3149 10.8019 19.5227 10.8514 21.0016C10.9505 22.4315 11 24.2063 11 26.3262C11 28.446 10.9505 30.2455 10.8514 31.7244C10.8019 33.1541 10.7277 34.362 10.6284 35.3481C10.5294 36.2846 10.4056 37.0736 10.2568 37.7143C10.1577 38.3059 10.0587 38.8237 9.95944 39.2673C9.56308 40.7463 8.99339 41.9048 8.25017 42.743C7.55647 43.581 6.63971 44 5.50011 44C4.3603 44 3.419 43.581 2.67578 42.743C1.93256 41.9048 1.36265 40.7463 0.966282 39.2673C0.867246 38.8237 0.767982 38.3059 0.668947 37.7143C0.569911 37.0736 0.470647 36.2846 0.371611 35.3481C0.272576 34.362 0.173542 33.1541 0.0742793 31.7244C0.0247614 30.2455 0 28.446 0 26.3262C0 24.2063 0.0247614 22.4315 0.0742793 21.0016C0.173542 19.5227 0.272576 18.3149 0.371611 17.3782C0.470647 16.3921 0.569911 15.6034 0.668947 15.0117C0.767982 14.4203 0.867246 13.9025 0.966282 13.4589C1.36265 11.9306 1.93256 10.7474 2.67578 9.90926C3.419 9.02187 4.3603 8.57817 5.50011 8.57817C6.63971 8.57817 7.55647 9.02187 8.25017 9.90926C8.99339 10.7474 9.56308 11.9306 9.95944 13.4589Z"/>
		</svg>
	),
	letter_b: (
		<svg width="37" height="53" viewBox="0 0 37 53" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18.5 53C15.9431 53 13.5366 52.5326 11.2806 51.5975C9.07441 50.6626 7.11924 49.4077 5.41458 47.833C3.76003 46.2582 2.43161 44.4129 1.42886 42.2968C0.476212 40.1314 0 37.8186 0 35.3581C0 33.5865 0.150309 31.8149 0.451157 30.0431C0.802109 28.2716 1.20316 26.5492 1.65432 24.8762C2.15581 23.1538 2.70718 21.4805 3.30887 19.8566C3.91057 18.1834 4.51204 16.5595 5.11374 14.9847C5.81564 13.1147 6.46744 11.3923 7.06913 9.81756C7.6706 8.19361 8.09694 6.69269 8.34746 5.31477C8.44789 4.92109 8.3224 4.82267 7.97145 5.0195C7.47019 5.51162 6.81839 5.75768 6.01628 5.75768C5.21394 5.75768 4.51204 5.48701 3.91057 4.94568C3.35898 4.40438 3.08318 3.71542 3.08318 2.87884C3.08318 2.09145 3.35898 1.42712 3.91057 0.885798C4.51204 0.295267 5.21394 0 6.01628 0C6.86849 0 7.57039 0.295267 8.12199 0.885798C8.67335 1.47633 8.94915 2.16529 8.94915 2.95265C8.94915 4.57662 8.5982 6.42202 7.8963 8.48887C7.24449 10.5065 6.44239 12.721 5.48974 15.1323C4.68763 17.2484 3.88552 19.4383 3.08318 21.702C2.28107 23.9657 1.65432 26.2787 1.20316 28.6406C1.15306 28.8867 1.15306 28.9851 1.20316 28.9359C1.30337 28.8376 1.37876 28.7392 1.42886 28.6406C2.13076 27.0168 3.05813 25.5405 4.21142 24.2118C5.36448 22.8831 6.66785 21.7266 8.12199 20.7424C9.626 19.7582 11.2553 18.9954 13.01 18.4541C14.7648 17.9128 16.5947 17.6421 18.5 17.6421C21.0569 17.6421 23.4634 18.1096 25.7194 19.0446C27.9757 19.9796 29.9309 21.2591 31.5854 22.8831C33.2397 24.4577 34.5433 26.3279 35.496 28.4931C36.4987 30.6583 37 32.9467 37 35.3581C37 37.8186 36.4987 40.1314 35.496 42.2968C34.5433 44.4129 33.2397 46.2582 31.5854 47.833C29.9309 49.4077 27.9757 50.6626 25.7194 51.5975C23.4634 52.5326 21.0569 53 18.5 53Z"/>
		</svg>
	),
	letter_e: (
		<svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18.9612 0C21.5927 0 24.0691 0.475984 26.3911 1.42797C28.7128 2.37996 30.7251 3.65762 32.4276 5.26105C34.1303 6.86428 35.4718 8.76839 36.452 10.9729C37.4839 13.1775 38 15.5074 38 17.9624C38 18.6638 37.9742 19.3403 37.9224 19.9916C37.9224 20.643 37.7935 21.3195 37.5355 22.0209C37.0712 23.4239 36.2715 24.401 35.1364 24.952C34.0529 25.5032 32.7887 25.879 31.3441 26.0793C29.8994 26.2798 28.4031 26.38 26.8553 26.38C25.3075 26.38 23.8629 26.5054 22.5213 26.7557C21.2316 26.9563 20.1739 27.4071 19.3482 28.1086C18.5227 28.76 18.11 29.8372 18.11 31.3403C18.11 31.8916 18.2389 32.4175 18.4969 32.9187C18.755 33.4197 19.0903 33.8706 19.5031 34.2714C19.9674 34.6221 20.4577 34.9228 20.9735 35.1734C21.4894 35.3739 21.9797 35.449 22.444 35.3989C23.4759 35.2985 24.4821 35.0982 25.4622 34.7976C26.4426 34.4969 27.3972 34.1462 28.3258 33.7454C28.4289 33.6953 28.4807 33.6452 28.4807 33.5952C28.5323 33.4948 28.4289 33.3946 28.1711 33.2945C27.5519 33.094 27.036 32.7683 26.6231 32.3174C26.2104 31.8165 26.0041 31.2151 26.0041 30.5137C26.0041 29.6618 26.2877 28.9605 26.8553 28.4093C27.423 27.858 28.1453 27.5826 29.0224 27.5826C29.8994 27.5826 30.6217 27.858 31.1894 28.4093C31.757 28.9605 32.0406 29.6618 32.0406 30.5137C32.0406 31.0146 31.9375 31.4908 31.731 31.9416C31.5248 32.3925 31.1894 32.7432 30.7251 32.9938C29.4351 33.6953 28.0935 34.2966 26.7007 34.7976C25.3591 35.2485 23.9402 35.5742 22.444 35.7747C22.0313 35.8247 21.5152 35.8748 20.8962 35.9249C20.3285 35.975 19.6835 36 18.9612 36C16.3299 36 13.8533 35.5241 11.5316 34.572C9.26146 33.6202 7.27492 32.3424 5.57244 30.7392C3.86973 29.0857 2.50239 27.1816 1.47069 25.0271C0.490306 22.8226 0 20.4678 0 17.9624C0 15.5074 0.490306 13.1775 1.47069 10.9729C2.50239 8.76839 3.86973 6.86428 5.57244 5.26105C7.27492 3.65762 9.26146 2.37996 11.5316 1.42797C13.8533 0.475984 16.3299 0 18.9612 0Z"/>
		</svg>
	),
	divider_large: (
		<svg width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line y1="1" x2="50" y2="1" stroke="#FFA500" stroke-width="2"/>
		</svg>
	),
	divider_small: (
		<svg width="31" height="3" viewBox="0 0 31 3" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line x1="0.5" y1="1.5" x2="30.5" y2="1.5" stroke="#FFA500" stroke-width="3"/>
		</svg>
	),
	logo: (
		<svg width="105" height="64" viewBox="0 0 105 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_155_53)">
				<path d="M14.6249 42.1705C13.3328 42.1705 12.0604 41.605 10.8074 40.4741C9.59368 39.3432 8.45822 37.9198 7.40108 36.204C6.34394 34.4881 5.3651 32.6162 4.46456 30.5882C3.56404 28.5215 2.80054 26.5911 2.17407 24.7971C1.54762 22.9644 1.0582 21.3849 0.70582 20.059C0.353436 18.7331 0.177246 17.9141 0.177246 17.6022C0.177246 16.7053 0.510052 15.9058 1.17566 15.2039C1.84127 14.5019 2.64392 14.1509 3.5836 14.1509C4.40583 14.1509 5.09103 14.3849 5.63916 14.8529C6.22648 15.2819 6.87251 15.7693 7.57726 16.3153C8.32118 16.8223 9.22173 17.2902 10.2789 17.7192C11.336 18.1481 12.7847 18.3626 14.6249 18.3626C16.426 18.3626 17.8551 18.1481 18.9122 17.7192C20.0085 17.2902 20.909 16.8223 21.6139 16.3153C22.3185 15.7693 22.9451 15.2819 23.4931 14.8529C24.0806 14.3849 24.7852 14.1509 25.6075 14.1509C26.5473 14.1509 27.3498 14.5019 28.0155 15.2039C28.7201 15.9058 29.0726 16.7053 29.0726 17.6022C29.0726 17.9141 28.8964 18.7331 28.5441 20.059C28.1915 21.3849 27.6827 22.9644 27.017 24.7971C26.3906 26.5911 25.627 28.5215 24.7265 30.5882C23.8652 32.6162 22.8863 34.4881 21.79 36.204C20.733 37.9198 19.5973 39.3432 18.3836 40.4741C17.1699 41.605 15.917 42.1705 14.6249 42.1705Z"/>
				<path d="M35.7511 11.9281C35.0854 11.9281 34.5373 11.7136 34.1067 11.2846C33.6759 10.8557 33.4605 10.3097 33.4605 9.64677C33.4605 9.0228 33.6759 8.49634 34.1067 8.06738C34.5373 7.59941 35.0854 7.36542 35.7511 7.36542C36.3775 7.36542 36.9061 7.59941 37.3367 8.06738C37.8066 8.49634 38.0416 9.0228 38.0416 9.64677C38.0416 10.3097 37.8066 10.8557 37.3367 11.2846C36.9061 11.7136 36.3775 11.9281 35.7511 11.9281ZM39.2748 18.0117C39.3533 18.3627 39.4315 18.7722 39.5098 19.2401C39.6273 19.7081 39.7252 20.332 39.8034 21.112C39.8819 21.853 39.9405 22.8083 39.9797 23.9782C40.0579 25.1093 40.0971 26.5132 40.0971 28.1901C40.0971 29.8669 40.0579 31.2903 39.9797 32.4602C39.9405 33.5911 39.8819 34.5466 39.8034 35.3266C39.7252 36.0674 39.6273 36.6915 39.5098 37.1983C39.4315 37.6663 39.3533 38.0759 39.2748 38.4268C38.9616 39.5967 38.5115 40.5131 37.9242 41.1762C37.376 41.839 36.6516 42.1705 35.7511 42.1705C34.8505 42.1705 34.1067 41.839 33.5194 41.1762C32.9321 40.5131 32.4818 39.5967 32.1686 38.4268C32.0903 38.0759 32.0119 37.6663 31.9336 37.1983C31.8554 36.6915 31.7769 36.0674 31.6987 35.3266C31.6204 34.5466 31.5422 33.5911 31.4637 32.4602C31.4246 31.2903 31.405 29.8669 31.405 28.1901C31.405 26.5132 31.4246 25.1093 31.4637 23.9782C31.5422 22.8083 31.6204 21.853 31.6987 21.112C31.7769 20.332 31.8554 19.7081 31.9336 19.2401C32.0119 18.7722 32.0903 18.3627 32.1686 18.0117C32.4818 16.8028 32.9321 15.8668 33.5194 15.2039C34.1067 14.5019 34.8505 14.151 35.7511 14.151C36.6516 14.151 37.376 14.5019 37.9242 15.2039C38.5115 15.8668 38.9616 16.8028 39.2748 18.0117Z"/>
				<path d="M58.0692 42.1705C56.0724 42.1705 54.193 41.8001 52.4312 41.0591C50.7083 40.3182 49.1814 39.3237 47.8501 38.0759C46.558 36.8279 45.5206 35.3656 44.7375 33.6887C43.9935 31.9727 43.6216 30.1399 43.6216 28.1901C43.6216 26.7862 43.739 25.3823 43.9739 23.9782C44.248 22.5743 44.5612 21.2094 44.9135 19.8836C45.3052 18.5187 45.7358 17.1927 46.2057 15.9058C46.6756 14.5799 47.1453 13.293 47.6152 12.0451C48.1633 10.5632 48.6724 9.19829 49.1422 7.95037C49.612 6.66347 49.9449 5.47406 50.1406 4.38212C50.219 4.07015 50.121 3.99215 49.8469 4.14813C49.4555 4.53812 48.9464 4.73311 48.32 4.73311C47.6934 4.73311 47.1453 4.51862 46.6756 4.08964C46.2448 3.66068 46.0294 3.11471 46.0294 2.45176C46.0294 1.82779 46.2448 1.30133 46.6756 0.872364C47.1453 0.404395 47.6934 0.17041 48.32 0.17041C48.9856 0.17041 49.5337 0.404395 49.9645 0.872364C50.3951 1.34033 50.6105 1.8863 50.6105 2.51025C50.6105 3.79717 50.3364 5.25957 49.7882 6.89745C49.2792 8.49634 48.6528 10.2512 47.9088 12.1621C47.2824 13.839 46.656 15.5744 46.0294 17.3682C45.403 19.1621 44.9135 20.9951 44.5612 22.8668C44.5221 23.0618 44.5221 23.1398 44.5612 23.1008C44.6395 23.0229 44.6983 22.9449 44.7375 22.8668C45.2856 21.58 46.0098 20.4101 46.9105 19.3572C47.811 18.3042 48.8289 17.3877 49.9645 16.6078C51.139 15.8278 52.4114 15.2234 53.7818 14.7944C55.1522 14.3654 56.5813 14.151 58.0692 14.151C60.066 14.151 61.9454 14.5214 63.7073 15.2624C65.4693 16.0033 66.9962 17.0173 68.2883 18.3042C69.5803 19.552 70.5983 21.034 71.3423 22.7499C72.1254 24.4657 72.5169 26.2792 72.5169 28.1901C72.5169 30.1399 72.1254 31.9727 71.3423 33.6887C70.5983 35.3656 69.5803 36.8279 68.2883 38.0759C66.9962 39.3237 65.4693 40.3182 63.7073 41.0591C61.9454 41.8001 60.066 42.1705 58.0692 42.1705Z"/>
				<path d="M90.4153 14.1509C92.4123 14.1509 94.2915 14.5214 96.0536 15.2624C97.8154 16.0033 99.3425 16.9977 100.634 18.2457C101.927 19.4935 102.945 20.9756 103.688 22.6914C104.471 24.4072 104.863 26.2207 104.863 28.1314C104.863 28.6774 104.844 29.2038 104.804 29.7108C104.804 30.2178 104.706 30.7443 104.511 31.2903C104.158 32.3822 103.551 33.1427 102.69 33.5716C101.868 34.0006 100.908 34.2931 99.8122 34.449C98.7159 34.6051 97.5804 34.683 96.4059 34.683C95.2313 34.683 94.135 34.7806 93.117 34.9755C92.1382 35.1315 91.3355 35.4825 90.709 36.0284C90.0825 36.5354 89.7693 37.3739 89.7693 38.5437C89.7693 38.9728 89.8672 39.3822 90.063 39.7723C90.2588 40.1621 90.5133 40.5131 90.8265 40.825C91.1789 41.098 91.5509 41.332 91.9424 41.5271C92.3339 41.6831 92.7059 41.7416 93.0583 41.7026C93.8414 41.6245 94.6049 41.4686 95.3487 41.2346C96.0927 41.0006 96.8171 40.7276 97.5218 40.4156C97.6 40.3767 97.6393 40.3377 97.6393 40.2987C97.6784 40.2206 97.6 40.1427 97.4044 40.0647C96.9345 39.9087 96.543 39.6552 96.2296 39.3042C95.9164 38.9143 95.7599 38.4463 95.7599 37.9003C95.7599 37.2373 95.9751 36.6915 96.4059 36.2624C96.8366 35.8334 97.3848 35.619 98.0503 35.619C98.7159 35.619 99.264 35.8334 99.6948 36.2624C100.126 36.6915 100.341 37.2373 100.341 37.9003C100.341 38.2902 100.263 38.6608 100.106 39.0118C99.9493 39.3627 99.6948 39.6357 99.3425 39.8307C98.3635 40.3767 97.3455 40.8447 96.2885 41.2346C95.2704 41.5855 94.1937 41.839 93.0583 41.9951C92.7451 42.0341 92.3534 42.073 91.8837 42.112C91.4529 42.151 90.9635 42.1705 90.4153 42.1705C88.4185 42.1705 86.5391 41.8 84.7773 41.059C83.0545 40.3182 81.547 39.3237 80.2551 38.0759C78.963 36.7889 77.9253 35.3069 77.1424 33.63C76.3984 31.9142 76.0264 30.0814 76.0264 28.1314C76.0264 26.2207 76.3984 24.4072 77.1424 22.6914C77.9253 20.9756 78.963 19.4935 80.2551 18.2457C81.547 16.9977 83.0545 16.0033 84.7773 15.2624C86.5391 14.5214 88.4185 14.1509 90.4153 14.1509Z"/>
				<path d="M3.4707 56.3293H4.27156V63.8747H3.4707V56.3293Z"/>
				<path d="M20.1015 56.3293V63.8747H19.4413L14.5713 57.7522V63.8747H13.7705V56.3293H14.4307L19.3116 62.4519V56.3293H20.1015Z"/>
				<path d="M31.0806 57.0192H28.4185V56.3293H34.5438V57.0192H31.8815V63.8747H31.0806V57.0192Z"/>
				<path d="M48.2146 63.1849V63.8747H42.8577V56.3293H48.0522V57.0192H43.6584V59.7033H47.576V60.3823H43.6584V63.1849H48.2146Z"/>
				<path d="M62.3046 63.8747L60.5731 61.4493C60.3782 61.471 60.1762 61.4817 59.967 61.4817H57.9323V63.8747H57.1316V56.3293H59.967C60.9337 56.3293 61.6913 56.5594 62.2396 57.0192C62.788 57.4792 63.062 58.1115 63.062 58.9163C63.062 59.5056 62.9105 60.0051 62.6076 60.4146C62.3118 60.817 61.886 61.1081 61.3305 61.2877L63.1812 63.8747H62.3046ZM59.9452 60.8027C60.6957 60.8027 61.2693 60.6374 61.666 60.3068C62.0628 59.9763 62.2613 59.5127 62.2613 58.9163C62.2613 58.3055 62.0628 57.8385 61.666 57.5151C61.2693 57.1846 60.6957 57.0192 59.9452 57.0192H57.9323V60.8027H59.9452Z"/>
				<path d="M71.9866 56.3293H72.7874V63.8747H71.9866V56.3293Z"/>
				<path d="M85.5984 63.9394C84.8481 63.9394 84.1662 63.774 83.5529 63.4435C82.947 63.1058 82.4708 62.6458 82.1244 62.0637C81.7853 61.4817 81.6157 60.8277 81.6157 60.1021C81.6157 59.3763 81.7853 58.7223 82.1244 58.1402C82.4708 57.5582 82.947 57.1018 83.5529 56.7712C84.1662 56.4335 84.8481 56.2646 85.5984 56.2646C86.3486 56.2646 87.0233 56.4299 87.6221 56.7605C88.2282 57.091 88.7044 57.551 89.0506 58.1402C89.397 58.7223 89.5701 59.3763 89.5701 60.1021C89.5701 60.8277 89.397 61.4852 89.0506 62.0746C88.7044 62.6567 88.2282 63.1129 87.6221 63.4435C87.0233 63.774 86.3486 63.9394 85.5984 63.9394ZM85.5984 63.2279C86.1971 63.2279 86.7383 63.0951 87.2216 62.8291C87.705 62.5561 88.0839 62.1824 88.358 61.7082C88.6322 61.2266 88.7694 60.6913 88.7694 60.1021C88.7694 59.5127 88.6322 58.981 88.358 58.5067C88.0839 58.0253 87.705 57.6515 87.2216 57.3857C86.7383 57.1127 86.1971 56.9761 85.5984 56.9761C84.9996 56.9761 84.4548 57.1127 83.9641 57.3857C83.4808 57.6515 83.0985 58.0253 82.817 58.5067C82.543 58.981 82.4058 59.5127 82.4058 60.1021C82.4058 60.6913 82.543 61.2266 82.817 61.7082C83.0985 62.1824 83.4808 62.5561 83.9641 62.8291C84.4548 63.0951 84.9996 63.2279 85.5984 63.2279Z"/>
				<path d="M103.572 63.8747L101.841 61.4493C101.646 61.471 101.444 61.4817 101.235 61.4817H99.2003V63.8747H98.3994V56.3293H101.235C102.202 56.3293 102.959 56.5594 103.508 57.0192C104.056 57.4792 104.33 58.1115 104.33 58.9163C104.33 59.5056 104.179 60.0051 103.876 60.4146C103.58 60.817 103.154 61.1081 102.599 61.2877L104.449 63.8747H103.572ZM101.213 60.8027C101.964 60.8027 102.537 60.6374 102.934 60.3068C103.331 59.9763 103.529 59.5127 103.529 58.9163C103.529 58.3055 103.331 57.8385 102.934 57.5151C102.537 57.1846 101.964 57.0192 101.213 57.0192H99.2003V60.8027H101.213Z"/>
			</g>
			<defs>
				<clipPath id="clip0_155_53">
					<rect width="105" height="64"/>
				</clipPath>
			</defs>
		</svg>
	),
	circle: (
		<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect y="0.5" width="10" height="10" rx="5"/>
		</svg>
	),
	arrow_right: (
		<svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20.0303 6.53033C20.3232 6.23744 20.3232 5.76256 20.0303 5.46967L15.2574 0.696699C14.9645 0.403806 14.4896 0.403806 14.1967 0.696699C13.9038 0.989593 13.9038 1.46447 14.1967 1.75736L18.4393 6L14.1967 10.2426C13.9038 10.5355 13.9038 11.0104 14.1967 11.3033C14.4896 11.5962 14.9645 11.5962 15.2574 11.3033L20.0303 6.53033ZM0.5 6.75H19.5V5.25H0.5V6.75Z"/>
		</svg>
	)
};
