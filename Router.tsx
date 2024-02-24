import { useStateProvider } from "./providers/StateProvider";
import DirScreen from "./screens/DirScreen/DirScreen";
import FileScreen from "./screens/FileScreen/FileScreen";

export default function Router() {
  const { state } = useStateProvider();

  return state === "DIR" ? <DirScreen /> : <FileScreen />;
}
