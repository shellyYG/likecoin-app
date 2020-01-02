import ArrowDownIcon from "./arrow-down.svg"
import ArrowLeftIcon from "./arrow-left.svg"
import ArrowUpIcon from "./arrow-up.svg"
import CrossIcon from "./cross.svg"
import LikeClap from "./like-clap.svg"
import QRCodeScan from "./qrcode-scan.svg"
import ReaderFeatured from "./reader-featured.svg"
import ReaderFollowing from "./reader-following.svg"
import ShareIcon from "./share.svg"
import TabReader from "./tab-reader.svg"
import TabSettings from "./tab-settings.svg"
import TabWallet from "./tab-wallet.svg"

export const icons = {
  "arrow-down": ArrowDownIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-up": ArrowUpIcon,
  back: ArrowLeftIcon,
  close: CrossIcon,
  "like-clap": LikeClap,
  "qrcode-scan": QRCodeScan,
  "reader-featured": ReaderFeatured,
  "reader-following": ReaderFollowing,
  share: ShareIcon,
  "tab-reader": TabReader,
  "tab-settings": TabSettings,
  "tab-wallet": TabWallet,
}

export type IconTypes = keyof typeof icons
