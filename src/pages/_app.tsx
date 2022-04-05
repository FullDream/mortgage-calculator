import type { AppProps } from 'next/app'
import { wrapper } from 'store'

import '../styles/reboot.scss'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
)

export default wrapper.withRedux(MyApp)
