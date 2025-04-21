import { useGLTF } from '@react-three/drei';

const SingleModel = ({ path, scale = 2.5, position = [0, -1.5, 0] }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene.clone()} scale={scale} position={position} />;
};

export default SingleModel;